<script>
    import TextInput from "$lib/components/TextInput.svelte";
    import SubmitButton from "$lib/components/SubmitButtom.svelte";

    import { source } from "sveltekit-sse";

    const msg = source('/listen', {
        close({connect}) {
            console.log("Reconnecting...");
            connect();
        }
    })
</script>

<main class="absolute top-0 left-0 -z-10 h-screen w-screen py-16 px-4 flex justify-center items-center bg-gray-700">

    <form method="POST" class="w-full shadow-md shadow-gray-800 items-center flex flex-col gap-4 bg-gray-600 p-4 rounded-md text-gray-200">
        <h1 class="text-xl">Solve the Expression</h1>
        <p>5 + 8  - 9 </p>
        <TextInput label="Answer" placeholder="Answer" name="answer"/>
        <SubmitButton />
    </form>

</main>
