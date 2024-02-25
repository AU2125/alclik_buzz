<script lang="ts">


    export let title: string;

    const tbData = [

        {
            "col1": 'val1',
            "col2": 'val2'
        },
        {
            "col1": 'val1',
            "col2": 'val2'
        },
        {
            "col1": 'val1',
            "col2": 'val2'
        },
        {
            "col1": 'val1',
            "col2": 'val2'
        },
        {
            "col1": 'val1',
            "col2": 'val2'
        },


    ];

    const colNames = new Set(tbData.map(e => Object.keys(e))
                       .reduce((e, f) => e.concat(f)));
</script>

<div class="flex flex-col items-center">

    <h1 class="text-lg ">Heading</h1>
    <table class="table-auto">
        <thead class="py-2">
            <tr>
                <th>S.no</th>
                {#each colNames as col}
                    <th>{col}</th>
                {/each}
            </tr>
        </thead>
        <tbody class="border border-white blue-200 bg-gray-300/30 backdrop-blur-md">
            {#each tbData as d}
                <tr class="border-b-2 border-gray-200">
                    <td></td>
                    {#each colNames as col}
                       <td class="px-4">{d[col]}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>

    </table>

</div>
