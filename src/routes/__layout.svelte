<script>
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col justify-between text-gray-800 dark:bg-stone-900 dark:text-gray-200">
	<slot />

	<footer class="bg-gray-50 dark:bg-zinc-800 py-16 border-t dark:border-gray-600">
		<div class="container px-10 mx-auto max-w-screen-lg text-gray-500 dark:text-gray-100">
			<div class="flex flex-col md:flex-row text-center md:text-left space-y-4 md:space-y-0 justify-between">
				<p class="text-sm font-extralight">Copyright © 2022 Timo Zacherl. All rights reserved. </p>
				<!-- Not included as of now: <p><a href="/resume.txt" class="text-sm font-extralight text-gray-800 dark:text-gray-50 hover:text-black border-b border-transparent hover:border-gray-300 dark:hover:text-white transition-colors">Résumé</a></p> -->
			</div>
		</div>
	</footer>
</div>
