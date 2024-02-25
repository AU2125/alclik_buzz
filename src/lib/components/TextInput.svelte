<script lang="ts">

    export let label:string;
    export let placeholder:string;
    export let name:string;
</script>
<label class=" flex flex-col gap-2 px-1 text-gray-200" for={name}>{label}
    <input name={name} type="text" class="border-2 placeholder:text-sm p-1 px-4 border-gray-500 bg-gray-300/50 rounded placeholder:text-slate-800" placeholder={placeholder}>
</label>
