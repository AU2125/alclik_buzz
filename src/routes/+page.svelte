<script lang="ts">
    import TextInput from '$lib/components/TextInput.svelte';
    import SubmitButton from '$lib/components/SubmitButtom.svelte';

</script>

<main class="h-screen w-screen py-16 px-4 flex justify-center items-center bg-gray-700">

    <section class="w-full shadow-md shadow-gray-800 items-center flex flex-col gap-4 bg-gray-600 p-4 rounded-md text-gray-200">
        <h1 class="text-xl">Register Your Team</h1>
        <TextInput label="Team Name" placeholder="Enter the name of the team" name="teamName"/>
        <SubmitButton />
    </section>

</main>
