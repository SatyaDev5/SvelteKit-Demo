<script>
    import { Avatar } from '@skeletonlabs/skeleton';
    import Bell from "../../public/assets/icons/bell.svelte";
</script>

<nav class=" w-full bg-navbar-bg p-2 flex justify-end items-center gap-7">
    <div class="bell max-w-5 max-h-5 flex items-center justify-center">
        <Bell></Bell>
    </div>
    <Avatar initials="SA" background="bg-white w-11 h-11"></Avatar>
</nav>