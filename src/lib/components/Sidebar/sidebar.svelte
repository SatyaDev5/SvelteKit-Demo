<script>
	import DashBoard from './dashboard.svelte';
	import Estimaze from './estimaze.svelte';
	import Library from './library.svelte';
	import Projects from './projects.svelte';
	import Setting from './setting.svelte';
</script>

<nav
	class="sidebar bg-sidebar-bg flex flex-col w-60 fixed h-full text-sidebar-font items-center justify-between"
>
	<ul class="w-full">
		<li class="w-full">
			<div class="title text-3xl m-8 font-space-grotesk-500 flex justify-center items-center gap-3">
				<Estimaze></Estimaze>
				<p>Estimaze</p>
			</div>
		</li>
		<div class="border-t border-sidebar-hr w-full"></div>
		<li
			class="nav-item flex font-space-grotesk-400 text-lg gap-3 justify-start items-center m-5 pl-2 w-full"
		>
			<DashBoard></DashBoard>
			<p>Dashboard</p>
		</li>
		<div class="border-t border-sidebar-hr w-full"></div>
		<li
			class="nav-item flex font-space-grotesk-400 text-lg gap-3 justify-start items-center m-5 pl-2 w-full"
		>
			<Projects></Projects>
			<p>Projects</p>
		</li>
		<div class="border-t border-sidebar-hr w-full"></div>
		<li
			class="nav-item flex font-space-grotesk-400 text-lg gap-3 justify-start items-center m-5 pl-2 w-full"
		>
			<Library></Library>
			<p>Library</p>
		</li>
		<div class="border-t border-sidebar-hr w-full"></div>
	</ul>
	<div class="w-full mb-32">
		<div class="border-t border-sidebar-hr w-full"></div>
		<li
			class="nav-item flex font-space-grotesk-400 text-lg gap-3 justify-start items-center m-5 pl-2 w-full"
		>
			<Setting></Setting>
			<p>Settings</p>
		</li>
		<div class="border-t border-sidebar-hr w-full"></div>
	</div>
</nav>
