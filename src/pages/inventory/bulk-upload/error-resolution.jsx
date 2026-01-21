import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ErrorResolution = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
            <div className="max-w-8xl mx-auto p-6 md:p-8 space-y-8">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                        <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                            <span>Store</span>
                            <ChevronRightIcon className="text-sm" />
                            <span>Products</span>
                            <ChevronRightIcon className="text-sm" />
                            <span>Bulk Upload</span>
                            <ChevronRightIcon className="text-sm" />
                            <span className="text-primary font-medium">Error Resolution</span>
                        </nav>
                        <h1 className="text-3xl font-bold tracking-tight">Import Error Resolution</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors">
                            Discard Draft
                        </button>
                        <button className="bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm transition-all flex items-center gap-2">
                            <CheckCircleIcon className="text-[20px]" />
                            Re-validate &amp; Import
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Errors</p>
                            <p className="text-4xl font-bold text-red-500 mt-1">8</p>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-full">
                            <ErrorIcon className="text-red-500 text-3xl" />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Affected Products</p>
                            <p className="text-4xl font-bold mt-1">5</p>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-full">
                            <Inventory2Icon className="text-slate-500 dark:text-slate-300 text-3xl" />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Resolved</p>
                            <p className="text-4xl font-bold text-emerald-500 mt-1">0</p>
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-full">
                            <TaskAltIcon className="text-emerald-500 text-3xl" />
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <h2 className="text-lg font-bold">Detected Issues</h2>
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Showing 8 of 8 errors</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-slate-900/50 text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                                    <th className="px-6 py-4">CSV Row #</th>
                                    <th className="px-6 py-4">Product Identifier</th>
                                    <th className="px-6 py-4">Field Name</th>
                                    <th className="px-6 py-4">Error Type</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Proposed Fix</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">14</td>
                                    <td className="px-6 py-4 font-semibold">LP-902-Y</td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">HSN Code</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 px-2 py-1 rounded text-[10px] font-bold">INVALID_FORMAT</span>
                                    </td>
                                    <td className="px-6 py-4">—</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <span className="bg-orange-50 text-orange-600 dark:bg-orange-900/20 px-3 py-1.5 rounded-md border border-orange-100 dark:border-orange-800/30">851</span>
                                            <ArrowForwardIcon className="text-slate-300 dark:text-slate-600" />
                                            <input className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-1.5 w-32 focus:ring-2 focus:ring-primary/20 outline-none" type="text" value="8517" />
                                        </div>
                                    </td>
                                </tr>
                                {/* Repeat the same conversion for other rows */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ErrorResolution;
