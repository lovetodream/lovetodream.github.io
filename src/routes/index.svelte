<script lang="ts">
	import codeedit from '$lib/assets/codeedit.png';
	import Socials from '$lib/components/Socials.svelte';
	import { variables } from '$lib/variables';
	import { fade } from 'svelte/transition';

	export let projects: any[];
</script>

<svelte:head>
	<title>Timo Zacherl</title>
</svelte:head>

<header class="space-y-8">
	<div class="container px-10 mx-auto max-w-screen-lg py-24 space-y-8">
		<img
			src="https://avatars.githubusercontent.com/u/38291523?v=4"
			alt="Avatar"
			class="rounded-full w-24 h-24 ring-1 ring-gray-200 dark:ring-gray-800 shadow-md"
		/>
		<h1 class="text-3xl font-bold tracking-wide">
			Timo is a <a
				href="https://www.apple.com/swift/"
				target="_blank"
				rel="noreferrer"
				class="mx-2 text-orange-600 hover:text-orange-700 transition-colors"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="inline-block h-8 mb-1"
					><path
						fill="currentColor"
						fill-rule="evenodd"
						d="M448 156.09c0-4.51-.08-9-.2-13.52a196.31 196.31 0 0 0-2.58-29.42 99.62 99.62 0 0 0-9.22-28A94.08 94.08 0 0 0 394.84 44a99.17 99.17 0 0 0-28-9.22 195 195 0 0 0-29.43-2.59c-4.51-.12-9-.17-13.52-.2H124.14c-4.51 0-9 .08-13.52.2-2.45.07-4.91.15-7.37.27a171.68 171.68 0 0 0-22.06 2.32 103.06 103.06 0 0 0-21.21 6.1q-3.46 1.45-6.81 3.12a94.66 94.66 0 0 0-18.39 12.32c-1.88 1.61-3.69 3.28-5.43 5A93.86 93.86 0 0 0 12 85.17a99.45 99.45 0 0 0-9.22 28 196.31 196.31 0 0 0-2.54 29.4c-.13 4.51-.18 9-.21 13.52v199.83c0 4.51.08 9 .21 13.51a196.08 196.08 0 0 0 2.58 29.42 99.3 99.3 0 0 0 9.22 28A94.31 94.31 0 0 0 53.17 468a99.47 99.47 0 0 0 28 9.21 195 195 0 0 0 29.43 2.59c4.5.12 9 .17 13.52.2H323.91c4.51 0 9-.08 13.52-.2a196.59 196.59 0 0 0 29.44-2.59 99.57 99.57 0 0 0 28-9.21A94.22 94.22 0 0 0 436 426.84a99.3 99.3 0 0 0 9.22-28 194.79 194.79 0 0 0 2.59-29.42c.12-4.5.17-9 .2-13.51V172.14c-.01-5.35-.01-10.7-.01-16.05zm-69.88 241c-20-38.93-57.23-29.27-76.31-19.47-1.72 1-3.48 2-5.25 3l-.42.25c-39.5 21-92.53 22.54-145.85-.38A234.64 234.64 0 0 1 45 290.12a230.63 230.63 0 0 0 39.17 23.37c56.36 26.4 113 24.49 153 0-57-43.85-104.6-101-141.09-147.22a197.09 197.09 0 0 1-18.78-25.9c43.7 40 112.7 90.22 137.48 104.12-52.57-55.49-98.89-123.94-96.72-121.74 82.79 83.42 159.18 130.59 159.18 130.59 2.88 1.58 5 2.85 6.73 4a127.44 127.44 0 0 0 4.16-12.47c13.22-48.33-1.66-103.58-35.31-149.2C329.61 141.75 375 229.34 356.4 303.42c-.44 1.73-.95 3.4-1.44 5.09 38.52 47.4 28.04 98.17 23.13 88.59z"
					/></svg
				></a
			> Swift developer.
		</h1>
		<div class="space-y-6">
			<p class="text-xl font-light tracking-wide leading-relaxed">
				He carefully crafts apps for
				<a
					href="https://www.apple.com/ios"
					target="_blank"
					rel="noreferrer"
					class="text-red-600 font-medium bg-red-50 hover:bg-red-100 px-2 py-1 rounded-xl transition-colors dark:bg-red-800 dark:bg-opacity-20 dark:hover:bg-red-800 dark:hover:bg-opacity-30"
					>iOS</a
				>,
				<a
					href="https://www.apple.com/macos"
					target="_blank"
					rel="noreferrer"
					class="text-blue-600 font-medium bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-xl transition-colors dark:bg-blue-800 dark:bg-opacity-20 dark:hover:bg-blue-800 dark:hover:bg-opacity-30"
					>macOS</a
				>,
				<a
					href="https://www.apple.com/tvos"
					target="_blank"
					rel="noreferrer"
					class="text-gray-600 font-medium bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded-xl transition-colors dark:bg-gray-100 dark:bg-opacity-10 dark:hover:bg-gray-100 dark:hover:bg-opacity-20 dark:text-gray-200"
					>tvOS</a
				>
				and
				<a
					href="https://www.apple.com/watchos"
					target="_blank"
					rel="noreferrer"
					class="text-cyan-600 font-medium bg-cyan-50 hover:bg-cyan-100 px-2 py-1 rounded-xl transition-colors dark:bg-cyan-800 dark:bg-opacity-20 dark:hover:bg-cyan-800 dark:hover:bg-opacity-30"
					>watchOS</a
				>. He even uses Swift on the Server with
				<a
					href="https://vapor.codes"
					target="_blank"
					rel="noreferrer"
					class="text-purple-500 font-medium bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded-xl transition-colors dark:bg-purple-800 dark:bg-opacity-20 dark:hover:bg-purple-800 dark:hover:bg-opacity-30"
					>Vapor</a
				>.
			</p>
			<p class="text-xl font-light tracking-wide">
				He's also sponsoring and contributing to Open Source Projects including
				<a
					href="https://github.com/CodeEditApp/CodeEdit"
					target="_blank"
					rel="noreferrer"
					class="mx-1 border-b border-dashed border-black border-opacity-40 hover:border-opacity-80 font-medium dark:hover:border-gray-200 transition-colors"
				>
					<img src={codeedit} alt="" class="inline-block h-6 mb-1" /> CodeEdit.
				</a>
			</p>
		</div>
		<div class="pt-2">
			<Socials />
		</div>
	</div>
</header>

{#if projects.length > 0}
	<main transition:fade>
		<section transition:fade>
			<div class="container px-10 mx-auto max-w-screen-lg pb-24 space-y-8">
				<div class="space-y-2">
					<h2 class="text-xl tracking-wide font-medium">Featured Projects</h2>
					<p class="text-lg tracking-wide font-light">
						A collection of some side projects that have shipped recently.
					</p>
				</div>

				<div class="grid md:grid-cols-2 gap-8">
					{#each projects as project}
						<a
							href={project.attributes.linkDestination}
							class="group project {project.attributes.thumbnailClasses}"
						>
							<article class="flex justify-center items-center text-center flex-col">
								<img
									src={variables.cmsUrl +
										project.attributes.appIcon.data.attributes.formats.thumbnail.url}
									alt="Thumbnail"
									loading="lazy"
									class="w-auto h-24 mb-6 group-hover:scale-[1.15] transition-transform duration-700 ease-in-out rounded-3xl shadow-xl"
								/>
								<h3 class="text-lg font-semibold tracking-wide mb-[4px]">
									{project.attributes.name}
								</h3>
								<p class="mb-[2px]">{project.attributes.summary}</p>
								<p class="group-hover:opacity-90 link-label">
									{project.attributes.linkLabel} &rarr;
								</p>
							</article>
						</a>
					{/each}
				</div>
			</div>
		</section>
	</main>
{/if}

<style lang="postcss">
	.project {
		@apply bg-gray-50 dark:bg-stone-800 ring-1 ring-gray-100 dark:ring-gray-700 p-10 rounded-2xl transition-colors duration-300;
	}

	.project.yellow-hover {
		@apply hover:bg-yellow-400 hover:bg-opacity-[0.05];
	}

	.project.yellow-hover .link-label {
		@apply text-yellow-400 transition-opacity;
	}

	.project.blue-hover {
		@apply hover:bg-blue-400 hover:bg-opacity-[0.05];
	}

	.project.blue-hover .link-label {
		@apply text-blue-400 transition-opacity;
	}
</style>
