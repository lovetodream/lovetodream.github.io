<script>
	import Socials from './Socials.svelte';
</script>

<main class="flex justify-center items-center flex-1 text-center">
	<section class="space-y-4 max-w-sm font-light">
		<h1 class="text-3xl font-bold tracking-wider">404</h1>
		<div class="space-y-1">
			<h2 class="text-xl tracking-wide font-medium">This page doesn't exist</h2>
			<p class="text-sm text-slate-400 tracking-wide">(perhaps it never really did?)</p>
		</div>
		<p>
			If you're seeing this page, could you <a href="mailto:timo@swiftbytimo.com">message me</a> and
			let me know where you were linked from?
		</p>
		<p>
			Otherwise you can head to the <a href="/">homepage</a>, which I (almost certainly) promise
			won't 404.
		</p>
		<div class="w-full flex justify-center pt-4">
			<Socials />
		</div>
	</section>
</main>

<style lang="postcss">
	a {
		@apply text-blue-500 border-b border-transparent hover:text-blue-400 hover:border-current transition-colors;
	}
</style>
