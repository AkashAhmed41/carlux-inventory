# 🏎️ Carlux Premium Inventory

A performance-focused automotive inventory dashboard built with **Next.js 15 (App Router)** and **Tailwind CSS v4**. This application emphasizes efficient data handling, responsive design, and a modern user interface tailored for luxury vehicle browsing.

---

## 🏗️ Engineering & Architecture

### 🛡️ Scalable Data Layer

- **Service-Oriented Architecture**: Data fetching is centralized in [src/lib/services/VehicleService.js](src/lib/services/VehicleService.js), isolating API logic from the UI components.
- **Robust Error Boundaries**: Implemented a custom [src/app/error.js](src/app/error.js) boundary to handle API failures gracefully with localized fallback states.
- **Localization Strategy**: All application strings are managed through a centralized [src/lib/localization/en.json](src/lib/localization/en.json) file, ensuring easy maintainability and scaling.

### 🎨 Design Implementation-

- **Modern UI Systems**: A dark-themed design system using **Tailwind CSS v4**, featuring glassmorphism effects and optimized layout containers.
- **Layout Stability**: Custom [loading skeletons](src/skeleton) that mirror the exact dimensions of final components to minimize Cumulative Layout Shift (CLS).
- **Responsive Fluidity**: A tailored grid system that transitions seamlessly from mobile-optimized single columns to multi-column desktop layouts.

---

## ✨ Feature Highlights

### 🔍 Discovery & Filtering

- **Real-time Search**: Title-based search (extended to brand metadata where applicable) with optimized React state management.
- **Price-based Sorting**: Dynamic sorting logic with support for discounted pricing calculations to provide accurate "Low to High" and "High to Low" ordering.
- **Empty States**: Context-aware [src/components/common/EmptyList.js](src/components/common/EmptyList.js) for handling zero-result search queries.

### 🚗 Vehicle Experience

- **Structured Metadata**: Detailed vehicle cards showcasing ratings, pricing, and stock status.
- **Optimized Assets**: Leveraging Next.js `Image` optimization for secure and fast delivery of vehicle thumbnails.

---

## 📁 Project Structure

```text
carlux-inventory/
├── src/
│   ├── app/            # App Router (Pages, Layouts, Error boundaries)
│   ├── components/     # UI Components (Atomic structure)
│   │   ├── common/     # Reusable inputs, dropdowns, and empty states
│   │   ├── header/     # Navigation & search interface
│   │   └── inventory-list/ # Grid and card implementations
│   ├── lib/            # Core logic
│   │   ├── services/   # API abstraction layer
│   │   ├── constants/  # App-wide constants
│   │   ├── localization/ # Multi-language support (future-ready)
│   │   └── utils/      # Helper functions
│   └── skeleton/       # Shimmer loading components
└── public/             # Static assets
```

---

## 🏁 Getting Started

### Installation

1. **Clone & Install**

   ```bash
   git clone <repo-url>
   npm install
   ```

2. **Execution**
   ```bash
   npm run dev     # Starts the development server
   npm run build   # Performs production optimization
   npm start       # Serves the optimized production build
   ```

---

### 📝 Notes & Trade-offs

- **State Management**: Kept state management local and lightweight to avoid unnecessary complexity for the current dataset size.
- **Focus**: Prioritized UI clarity, performance, and structural robustness over broad feature breadth, per the assignment focus.

---

_This project was developed for the Frontend Hiring Task, focusing on engineering best practices and modern frontend implementation._
