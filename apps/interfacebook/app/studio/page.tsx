"use client";

import React, { useState } from "react";
import {
  Search,
  Monitor,
  Tablet,
  Smartphone,
  Sun,
  Moon,
  Github,
  Maximize2,
  Box,
  Layers,
  FileText,
  Package,
  Settings,
  Menu,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function StudioPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSlowMotion, setIsSlowMotion] = useState(false);
  const [isReduceMotion, setIsReduceMotion] = useState(true);
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  const [activeTab, setActiveTab] = useState<
    "controls" | "interactions" | "docs" | "deps"
  >("controls");
  const [theme, setTheme] = useState<"light" | "dark" | "system">("dark");

  return (
    <div className="flex flex-col h-screen bg-[#0B0F14] text-[#EAF0FF] font-sans overflow-hidden">
      {/* Header */}
      <header className="h-14 border-b border-[#FFFFFF1A] flex items-center justify-between px-4 shrink-0 bg-[#0B0F14]">
        {/* Left: Logo & Search */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2AF6D6] rounded-md flex items-center justify-center text-black font-bold text-xs">
              I
            </div>
            <span className="font-semibold text-sm tracking-tight">
              InterfaceBook
            </span>
            <span className="text-[10px] text-[#A7B0C0] mt-0.5">v1.0.0</span>
            <a
              href="#"
              className="text-[10px] text-[#A7B0C0] hover:text-white flex items-center gap-1 ml-2"
            >
              Documentation <ExternalLink size={8} />
            </a>
          </div>

          <div className="relative group">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A7B0C0] group-focus-within:text-[#2AF6D6]"
            />
            <input
              type="text"
              placeholder="Search Components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#141F2D] border border-transparent focus:border-[#2AF6D6] rounded-md pl-9 pr-4 py-1.5 text-xs w-64 text-white placeholder-[#A7B0C0] outline-none transition-all"
            />
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-xs text-[#A7B0C0]">
            <div className="flex items-center gap-2">
              <span>Slow Motion</span>
              <button
                onClick={() => setIsSlowMotion(!isSlowMotion)}
                className={`w-8 h-4 rounded-full relative transition-colors ${
                  isSlowMotion ? "bg-[#2AF6D6]" : "bg-[#2F3540]"
                }`}
              >
                <div
                  className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${
                    isSlowMotion ? "left-4.5" : "left-0.5"
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span>Reduce Motion</span>
              <button
                onClick={() => setIsReduceMotion(!isReduceMotion)}
                className={`w-8 h-4 rounded-full relative transition-colors ${
                  isReduceMotion ? "bg-[#2AF6D6]" : "bg-[#2F3540]"
                }`}
              >
                <div
                  className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${
                    isReduceMotion ? "left-4.5" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="h-6 w-px bg-[#FFFFFF1A]" />

          <div className="flex items-center bg-[#141F2D] rounded-md p-0.5">
            <button
              onClick={() => setViewport("desktop")}
              className={`p-1.5 rounded text-[#A7B0C0] hover:text-white ${
                viewport === "desktop" ? "bg-[#2F3540] text-white" : ""
              }`}
            >
              <Monitor size={14} />
            </button>
            <button
              onClick={() => setViewport("tablet")}
              className={`p-1.5 rounded text-[#A7B0C0] hover:text-white ${
                viewport === "tablet" ? "bg-[#2F3540] text-white" : ""
              }`}
            >
              <Tablet size={14} />
            </button>
            <button
              onClick={() => setViewport("mobile")}
              className={`p-1.5 rounded text-[#A7B0C0] hover:text-white ${
                viewport === "mobile" ? "bg-[#2F3540] text-white" : ""
              }`}
            >
              <Smartphone size={14} />
            </button>
          </div>
        </div>

        {/* Right: Tabs & Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-6 text-xs font-medium text-[#A7B0C0] h-full">
            <button
              onClick={() => setActiveTab("controls")}
              className={`flex items-center gap-2 h-14 border-b-2 transition-colors ${
                activeTab === "controls"
                  ? "border-[#2AF6D6] text-white"
                  : "border-transparent hover:text-white"
              }`}
            >
              <Settings size={14} /> Controls
            </button>
            <button
              onClick={() => setActiveTab("interactions")}
              className={`flex items-center gap-2 h-14 border-b-2 transition-colors ${
                activeTab === "interactions"
                  ? "border-[#2AF6D6] text-white"
                  : "border-transparent hover:text-white"
              }`}
            >
              <Layers size={14} /> Interactions
            </button>
            <button
              onClick={() => setActiveTab("docs")}
              className={`flex items-center gap-2 h-14 border-b-2 transition-colors ${
                activeTab === "docs"
                  ? "border-[#2AF6D6] text-white"
                  : "border-transparent hover:text-white"
              }`}
            >
              <FileText size={14} /> Docs
            </button>
            <button
              onClick={() => setActiveTab("deps")}
              className={`flex items-center gap-2 h-14 border-b-2 transition-colors ${
                activeTab === "deps"
                  ? "border-[#2AF6D6] text-white"
                  : "border-transparent hover:text-white"
              }`}
            >
              <Package size={14} /> Deps
            </button>
          </div>

          <div className="h-6 w-px bg-[#FFFFFF1A]" />

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-2 py-1 bg-[#141F2D] border border-[#FFFFFF1A] rounded text-[10px] text-[#A7B0C0] hover:text-white transition-colors">
              <Package size={12} />
              npm i @interfacebook/react
            </button>
            <button className="flex items-center gap-2 px-2 py-1 bg-[#141F2D] border border-[#FFFFFF1A] rounded text-[10px] text-[#A7B0C0] hover:text-white transition-colors">
              <Monitor size={12} />
              System
            </button>
            <a
              href="https://github.com/InterfaceOS/interfaceos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A7B0C0] hover:text-white"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-[#FFFFFF1A] bg-[#0B0F14] flex flex-col">
          <div className="p-4">
            <h3 className="text-xs font-semibold text-[#A7B0C0] uppercase tracking-wider mb-4">
              Components
            </h3>
            {/* Mock Component List */}
            <ul className="space-y-1">
              {["Button", "Input", "Card", "Modal", "Dropdown", "Toggle"].map(
                (item) => (
                  <li key={item}>
                    <button className="w-full text-left px-3 py-2 rounded text-sm text-[#A7B0C0] hover:bg-[#141F2D] hover:text-white transition-colors flex items-center justify-between group">
                      {item}
                      <ChevronRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 text-[#2AF6D6]"
                      />
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </aside>

        {/* Center Canvas */}
        <main className="flex-1 bg-[#101823] relative flex items-center justify-center overflow-hidden">
          {/* Dot Grid Background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #A7B0C0 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Component Preview Container */}
          <div
            className={`transition-all duration-300 border border-[#FFFFFF1A] bg-[#0B0F14] shadow-2xl rounded-lg overflow-hidden flex flex-col ${
              viewport === "mobile"
                ? "w-[375px] h-[667px]"
                : viewport === "tablet"
                ? "w-[768px] h-[1024px]"
                : "w-[90%] h-[90%]"
            }`}
          >
            <div className="h-8 bg-[#141F2D] border-b border-[#FFFFFF1A] flex items-center px-3 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFCC00]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#3DFF7A]" />
            </div>
            <div className="flex-1 flex items-center justify-center p-8">
              <p className="text-[#A7B0C0] text-sm">Select a component to preview</p>
            </div>
          </div>
        </main>

        {/* Right Sidebar (Controls) */}
        {activeTab === "controls" && (
          <aside className="w-80 border-l border-[#FFFFFF1A] bg-[#0B0F14] flex flex-col">
            <div className="h-12 border-b border-[#FFFFFF1A] flex items-center px-4 shrink-0">
              <h3 className="text-sm font-medium text-white">Properties</h3>
            </div>
            <div className="flex-1 p-4">
              <p className="text-xs text-[#A7B0C0] text-center mt-10">
                No component selected.
              </p>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
