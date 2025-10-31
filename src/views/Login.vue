<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
            <h2 class="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
            <form>
                <div class="mb-4">
                    <label class="block text-gray-600 mb-1" for="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-600 mb-1" for="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button
                    type="submit"
                    class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
</script>
