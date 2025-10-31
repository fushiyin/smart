<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
        <svg
            class="w-20 h-20 text-blue-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
            />
        </svg>
        <h1 class="text-6xl font-extrabold text-gray-700 mb-2">404</h1>
        <p class="text-lg mb-6 text-gray-500">
            Sorry, the page you are looking for does not exist.
        </p>
        <router-link
            to="/home/index"
            class="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow transition"
        >
            Go Home
        </router-link>
    </div>
</template>
