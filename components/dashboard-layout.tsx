"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, Shield, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => pathname === path
  const isActiveParent = (path) => pathname?.startsWith(path)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold hidden sm:inline-block">AI Governance</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-8">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/regulations"
                className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  isActiveParent("/regulations") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Legislation Library
              </Link>
            </li>
            <li className="relative group">
              <span
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer whitespace-nowrap ${
                  isActiveParent("/compliance") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Compliance Portal
              </span>
              <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-background rounded-md shadow-md border border-border overflow-hidden">
                  <Link
                    href="/compliance"
                    className={`block px-4 py-2 text-sm hover:bg-muted ${
                      isActive("/compliance") ? "bg-muted font-medium" : ""
                    }`}
                  >
                    AI Risk Assessment
                  </Link>
                  <Link
                    href="/compliance/history"
                    className={`block px-4 py-2 text-sm hover:bg-muted ${
                      isActive("/compliance/history") ? "bg-muted font-medium" : ""
                    }`}
                  >
                    Past Assessments
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* Search and User Profile */}
        <div className="ml-auto flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-md border border-input bg-background pl-8 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:w-[150px] lg:w-[180px]"
            />
          </div>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Mobile Navigation Sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="p-0">
          <div className="flex h-16 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">AI Governance</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setMobileOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="py-4">
            <Link
              href="/"
              className={`flex px-4 py-2 ${isActive("/") ? "bg-muted font-medium" : "text-muted-foreground"}`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/regulations"
              className={`flex px-4 py-2 ${
                isActiveParent("/regulations") ? "bg-muted font-medium" : "text-muted-foreground"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Legislation Library
            </Link>
            <div>
              <div
                className={`flex px-4 py-2 ${isActiveParent("/compliance") ? "font-medium" : "text-muted-foreground"}`}
              >
                Compliance Portal
              </div>
              <div className="pl-4">
                <Link
                  href="/compliance"
                  className={`flex px-4 py-2 ${
                    isActive("/compliance") ? "bg-muted font-medium" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  AI Risk Assessment
                </Link>
                <Link
                  href="/compliance/history"
                  className={`flex px-4 py-2 ${
                    isActive("/compliance/history") ? "bg-muted font-medium" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Past Assessments
                </Link>
              </div>
            </div>
            <Link
              href="/risk-assessment"
              className={`flex px-4 py-2 ${
                isActive("/risk-assessment") ? "bg-muted font-medium" : "text-muted-foreground"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Risk Assessment
            </Link>
            <Link
              href="/resources"
              className={`flex px-4 py-2 ${isActive("/resources") ? "bg-muted font-medium" : "text-muted-foreground"}`}
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </Link>
          </div>
          <div className="px-4 py-2 border-t">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-md border border-input bg-background pl-8 pr-4 py-2 text-sm"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  )
}
