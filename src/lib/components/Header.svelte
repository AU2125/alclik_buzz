<script>
    import { getContext } from "svelte";

    const user = getContext('user');

</script>
<header class="absolute top-0 flex flex-col items-center justify-center py-4 z-10 left-0 w-screen">
    <h1 class="text-3xl text-gray-300">Alclik</h1>
    <p>{$user.name}</p>
</header>
