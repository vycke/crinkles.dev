<script>
	let klass = undefined;
	export { klass as class };
	export let size = 42;
</script>

<a
	href="/"
	aria-label="Logo that redirects to the homepage"
	class={`logo | transition-300 no-decoration ${klass}`}
>
	<svg
		width={size}
		height={size}
		viewBox="0 0 42 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
			<rect opacity="0" x="4" y="14" width="11" height="21" rx="4" fill="url(#paint0_linear)" />
			<rect
				opacity="0"
				x="11.4981"
				y="13.8613"
				width="16.6324"
				height="23.9031"
				rx="4"
				transform="rotate(-59.52 11.4981 13.8613)"
				fill="url(#paint0_linear)"
			/>
			<rect
				opacity="0"
				x="21.2232"
				y="50.0959"
				width="16.6324"
				height="23.9031"
				rx="4"
				transform="rotate(-123.679 21.2232 50.0959)"
				fill="url(#paint0_linear)"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M18.689 1.5688C21.9031 -0.522933 26.0483 -0.522935 29.2624 1.5688L37.5944 6.99122C43.4685 10.814 43.4685 19.4154 37.5944 23.2382L35.4451 24.637L37.5944 26.0357C43.4685 29.8586 43.4685 38.4599 37.5944 42.2827L29.2624 47.7052C26.0483 49.7969 21.9031 49.7969 18.689 47.7052L4.40558 38.4096C1.65758 36.6212 0 33.5648 0 30.2861V18.9878C0 15.7092 1.65758 12.6527 4.40558 10.8643L18.689 1.5688ZM34.8119 18.9627L30.769 21.5938L14.979 11.3178C14.6438 11.0996 14.303 10.9053 13.958 10.7341L21.4715 5.84433C22.9939 4.85351 24.9574 4.85351 26.4799 5.84433L34.8119 11.2667C37.5944 13.0776 37.5944 17.1519 34.8119 18.9627ZM18.8745 29.3347L26.0929 24.637L18.8745 19.9393V29.3347ZM14.979 37.9562C14.6438 38.1743 14.303 38.3686 13.958 38.5399L21.4715 43.4296C22.9939 44.4205 24.9574 44.4205 26.4799 43.4296L34.8119 38.0072C37.5944 36.1964 37.5944 32.1221 34.8119 30.3113L30.769 27.6802L14.979 37.9562ZM5.61133 19.0256C5.61133 16.7718 7.43844 14.9447 9.6923 14.9447C11.9462 14.9447 13.7733 16.7718 13.7733 19.0256V30.2483C13.7733 32.5022 11.9462 34.3293 9.6923 34.3293C7.43844 34.3293 5.61133 32.5022 5.61133 30.2483V19.0256Z"
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
