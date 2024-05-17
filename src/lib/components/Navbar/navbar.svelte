<script>
    import { Avatar } from '@skeletonlabs/skeleton';
    import Bell from "./bell.svelte";
</script>

<nav class=" w-full bg-navbar-bg flex p-3 justify-end items-center gap-8">
    <div class="bell flex items-center justify-center size-5">
        <Bell></Bell>
    </div>
    <Avatar background="bg-white h-10 w-10"></Avatar>
</nav>