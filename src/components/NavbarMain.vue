<script setup>
const menuList = [
    'Markets',
    'Insights',
    'News',
    'Analysis',
    'Charts',
    'Brokers',
    'Tools',
    'Portofolio'
];
</script>

<template>
    <nav class="navbar">
        <p>nfldyprdn.</p>
        <span v-for="m in menuList" :key="m" class="listMenu">{{ m }}</span>
        <div class="buttons">
            <button>Signup</button>
            <button class="buttons-disabled">Login</button>
        </div>
    </nav>
</template>

<style scoped>
li {
    list-style: none;
}

button {
    background-color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

.buttons :hover {
    transform: scale(1.1);
    transition: ease-in 0.2s;
}

.buttons {
    display: flex;
    flex-direction: row;
    gap: 8px;
}

.buttons-disabled {
    background-color: transparent;
    color: white;
}

.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: darkblue;
    color: white;
    height: 3rem;
    padding: 0 3rem;
}

.listMenu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>