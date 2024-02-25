<script lang="ts">

    export let label:string;
    export let placeholder:string;
    export let name:string;
</script>
<div>
    <label for={name} class="">{label}</label>
    <input type="text" class="border-2 border-white active:bg-gray-300 text-gray-700 focus:ring bg-gray-300/50 rounded" placeholder={placeholder}>
</div>
