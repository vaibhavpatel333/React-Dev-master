import React from "react";
import { Search, Add, Notifications } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      {/* <div>
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Manage stock levels and variants across your store.{" "}
          <span className="text-blue-500 font-semibold">18 Low stock alerts</span>
        </p>
      </div> */}

      <div className="flex items-center space-x-3 justify-between w-full">
        <div className="relative">
          <Search
            fontSize="small"
            className="absolute left-3 top-7.5 -translate-y-1/2 text-slate-400"
          />
          <input
            className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-sm w-64 focus:ring-primary focus:border-primary"
            placeholder="Search inventory, tags, or SKUs..."
            type="text"
          />
        </div>

        <button
          className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
          onClick={() => navigate("/products/add")}
        >
          <Add fontSize="small" className="mr-2" />
          Add Product
        </button>
      </div>
    </header>
  );
};

export default Header;
