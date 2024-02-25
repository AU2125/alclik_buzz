<script lang="ts">
    import TextInput from '$lib/components/TextInput.svelte';
    import SubmitButton from '$lib/components/SubmitButtom.svelte';
    import type { PageData, ActionData } from './$types';
    export let data: PageData;
    export let form: ActionData;
</script>

<main class="h-screen w-screen py-16 px-4 flex justify-center items-center bg-gray-700">

    <section class="w-full shadow-md shadow-gray-800 items-center">
        <form method="POST" class="flex flex-col gap-4 bg-gray-600 p-4 rounded-md text-gray-200">
            <h1 class="text-xl">Register Your Team</h1>
            <TextInput label="Team Name" placeholder="Enter the name of the team" name="teamName"/> 
            <SubmitButton />
        </form>
        {#if form?.success}
            <!-- this message is ephemeral; it exists because the page was rendered in
                response to a form submission. it will vanish if the user reloads -->
            <p>Successfully logged in! Welcome back, {data.teamname}</p>
        {/if}
    </section>
</main>
