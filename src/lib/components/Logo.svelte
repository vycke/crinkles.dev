<script>
	let klass = undefined;
	export { klass as class };
	export let size = 42;
</script>

<a
	href="/"
	aria-label="Logo that redirects to the homepage"
	class="logo | transition-300 no-decoration {klass}"
>
	<svg
		width="{size}"
		height="{size}"
		viewBox="0 0 42 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M29.2624 1.5688C26.0483 -0.522935 21.9031 -0.522933 18.689 1.5688L4.40558 10.8643C1.65758 12.6527 0 15.7092 0 18.9878V30.2861C0 33.5648 1.65758 36.6212 4.40558 38.4096L18.689 47.7052C21.9031 49.7969 26.0483 49.7969 29.2624 47.7052L37.5944 42.2827C43.4685 38.4599 43.4685 29.8586 37.5944 26.0357L35.4451 24.637L37.5944 23.2382C43.4685 19.4154 43.4685 10.814 37.5944 6.99122L29.2624 1.5688ZM30.769 21.5938L34.8119 18.9627C37.5944 17.1519 37.5944 13.0776 34.8119 11.2667L26.4799 5.84433C24.9574 4.85351 22.9939 4.85351 21.4715 5.84433L13.958 10.7341C14.303 10.9053 14.6438 11.0996 14.979 11.3178L30.769 21.5938ZM26.0929 24.637L18.8745 29.3347V19.9393L26.0929 24.637ZM13.958 38.5399C14.303 38.3686 14.6438 38.1743 14.979 37.9562L30.769 27.6802L34.8119 30.3113C37.5944 32.1221 37.5944 36.1964 34.8119 38.0072L26.4799 43.4296C24.9574 44.4205 22.9939 44.4205 21.4715 43.4296L13.958 38.5399Z"
			fill="url(#paint0_linear)"
		/>

		<defs>
			<linearGradient
				id="paint0_linear"
				x1="7.5"
				y1="42.5"
				x2="42.5"
				y2="7.5"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="var(--color-primary)" />
				<stop offset="1" stop-color="var(--color-primary)" />
			</linearGradient>
		</defs>
	</svg>
</a>

<style>
	.logo:hover {
		transform: rotate(360deg);
	}

	.logo svg {
		display: block;
	}
</style>
