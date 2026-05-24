"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { GitBranch, Star, Users, ExternalLink, Activity } from "lucide-react"
import Link from "next/link"

const GITHUB_USERNAME = "axtheon"
const CACHE_KEY = "github_data_cache"
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

interface GitHubData {
  user: {
    public_repos: number
    followers: number
    following: number
  }
  events: Array<{
    created_at: string
    [key: string]: unknown
  }>
}

export default function Github() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          const { data, timestamp } = JSON.parse(cached)
          if (Date.now() - timestamp < CACHE_DURATION) {
            setData(data)
            setLoading(false)
            return
          }
        }

        const [userRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public`),
        ])

        if (!userRes.ok || !eventsRes.ok) throw new Error("GitHub API error")

        const userData = await userRes.json()
        const eventsData = await eventsRes.json()
        
        const newData = { user: userData, events: eventsData }
        setData(newData)
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: newData, timestamp: Date.now() }))
        setLoading(false)
      } catch (err) {
        console.error(err)
        setError(true)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const contributionStats = useMemo(() => {
    if (!data || !data.events.length) return null

    const today = new Date()
    const contributionsByDate: Record<string, number> = {}

    for (let i = 0; i < 120; i++) { // Show last 120 days for compact view
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      contributionsByDate[d.toISOString().split("T")[0]] = 0
    }

    const eventDates = new Set<string>()
    data.events.forEach((event) => {
      if (!event.created_at) return
      const dateStr = event.created_at.split("T")[0]
      if (dateStr in contributionsByDate) {
        contributionsByDate[dateStr]++
        eventDates.add(dateStr)
      }
    })

    const sortedDates = Object.keys(contributionsByDate).sort()
    
    // Calculate streaks
    let currentStreak = 0
    let longestStreak = 0
    let tempStreak = 0

    sortedDates.forEach(date => {
      if (contributionsByDate[date] > 0) {
        tempStreak++
        longestStreak = Math.max(longestStreak, tempStreak)
      } else {
        tempStreak = 0
      }
    })

    for (let i = sortedDates.length - 1; i >= 0; i--) {
      if (contributionsByDate[sortedDates[i]] > 0) currentStreak++
      else if (i < sortedDates.length - 1) break // Only break if we've checked at least today
    }

    return {
      contributionsByDate,
      sortedDates,
      currentStreak,
      longestStreak,
      activeDays: eventDates.size
    }
  }, [data])

  return (
    <section id="github" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-6">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] font-mono">02. GitHub Activity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              OPEN SOURCE <span className="text-cyber-cyan">CONTRIBUTIONS</span>
            </h2>
          </div>
          <Link 
            href={`https://github.com/${GITHUB_USERNAME}`} 
            target="_blank"
            className="flex items-center gap-2 text-sm font-bold text-cyber-cyan hover:text-white transition-colors uppercase tracking-widest font-mono group"
          >
            View GitHub Profile
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="h-64 flex flex-col items-center justify-center gap-4 text-gray-500 font-mono text-sm">
            <div className="w-12 h-12 border-2 border-cyber-cyan/30 border-t-cyber-cyan rounded-full animate-spin" />
            <span className="animate-pulse">Fetching real-time data...</span>
          </div>
        ) : error ? (
          <div className="h-64 flex flex-col items-center justify-center gap-4 text-red-400/60 font-mono text-sm border border-red-500/10 rounded-3xl bg-red-500/5">
            <Activity className="w-8 h-8 opacity-50" />
            <span>Connection to GitHub API failed.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Stats Column */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-cyber-cyan/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyber-cyan/10 text-cyber-cyan">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Public Repos</p>
                    <p className="text-xl font-black text-white">{data?.user.public_repos}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-cyber-cyan/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-500">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Followers</p>
                    <p className="text-xl font-black text-white">{data?.user.followers}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-cyber-cyan/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyber-violet/10 text-cyber-violet">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Following</p>
                    <p className="text-xl font-black text-white">{data?.user.following}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contribution Graph */}
            <div className="lg:col-span-2 p-8 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyber-cyan" />
                  Activity Graph
                </h3>
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Current Streak</span>
                    <span className="text-sm font-black text-cyber-cyan">{contributionStats?.currentStreak} Days</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Longest Streak</span>
                    <span className="text-sm font-black text-white">{contributionStats?.longestStreak} Days</span>
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className="flex-1 flex items-end gap-[3px] h-32">
                {contributionStats?.sortedDates.map((date, i) => {
                  const count = contributionStats.contributionsByDate[date]
                  const height = count === 0 ? 10 : Math.min(count * 20 + 10, 100)
                  const opacity = count === 0 ? 0.1 : 0.3 + (count * 0.2)
                  
                  return (
                    <motion.div
                      key={date}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.5, delay: i * 0.005 }}
                      className="flex-1 rounded-sm bg-cyber-cyan"
                      style={{ opacity }}
                      title={`${count} contributions on ${date}`}
                    />
                  )
                })}
              </div>
              
              <div className="mt-6 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                <span>{contributionStats?.sortedDates[0]}</span>
                <span>Last 120 Days of Activity</span>
                <span>Today</span>
              </div>

              {/* Background Decor */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyber-cyan/5 blur-[100px] rounded-full pointer-events-none" />
            </div>

          </div>
        )}

      </div>
    </section>
  )
}
