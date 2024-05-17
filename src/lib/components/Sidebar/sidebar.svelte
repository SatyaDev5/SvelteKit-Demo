<script>
	import DashBoard from './dashboard.svelte';
	import Estimaze from './estimaze.svelte';
	import Library from './library.svelte';
	import Projects from './projects.svelte';
	import Setting from './setting.svelte';
</script>

<div
	class="sidebar bg-sidebar-bg flex flex-col w-60 fixed h-full text-sidebar-font justify-center items-center"
>
	<div class="title text-3xl m-8 font-space-grotesk-500 flex justify-center items-center gap-3">
		<Estimaze></Estimaze>
		<p>Estimaze</p>
	</div>
	<div class="border-t border-sidebar-hr w-full"></div>
	<nav class="h-screen flex flex-col items-start font-space-grotesk-400 text-lg mr-10">
		<ul class="">
			<li class="flex flex-col">
                <div class="flex gap-3 justify-start items-center m-5">
                    <DashBoard></DashBoard>
                    <p>Dashboard</p>
                </div>
                <div class="border-t border-sidebar-hr"></div>
			</li>
			<li class="flex gap-3 justify-start items-center m-5">
				<Projects></Projects>
				<p>Projects</p>
			</li>
			<div class="border-t border-sidebar-hr"></div>
			<li class="flex gap-3 justify-start items-center m-5">
				<Library></Library>
				<p>Library</p>
			</li>
			<div class="border-t border-sidebar-hr w-full"></div>
		</ul>
        <div class="settings relative top-56">
            <div class="border-t border-sidebar-hr w-full"></div>
            <div class="flex gap-3 justify-start items-center m-5">
                <Setting></Setting>
                <p>Settings</p>
            </div>
            <div class="border-t border-sidebar-hr w-full"></div>
        </div>
	</nav>
</div>
