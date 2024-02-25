<script>
	import '../app.pcss';
    import Header from '$lib/components/Header.svelte';


    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    const user = writable();

    $: user.set({
        "name" : "username",
    });

    setContext('user', user);
</script>

<Header />
<slot />
