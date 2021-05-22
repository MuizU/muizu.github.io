<template>
	<v-app-bar flat absolute dark height="120px">
		<v-layout justify-center>
			<v-container>
				<v-layout>
					<div
						:class="{
							'display-1 font-weight-bold':
								$vuetify.breakpoint.smAndUp,
							'title font-weight-bold':
								$vuetify.breakpoint.smAndDown,
						}"
					>
						Muiz Uvais
					</div>
					<v-spacer></v-spacer>
					<v-toolbar-items class="text-right">
						<v-btn
							:x-small="$vuetify.breakpoint.smAndDown"
							@click="$vuetify.goTo('#about', options)"
							text
							>About</v-btn
						>
						<v-btn
							:x-small="$vuetify.breakpoint.smAndDown"
							@click="$vuetify.goTo('#portfolio', options)"
							text
							>My Projects</v-btn
						>
						<v-btn
							:x-small="$vuetify.breakpoint.smAndDown"
							@click="$vuetify.goTo('#contact', options)"
							text
							>Contact</v-btn
						>
					</v-toolbar-items>
				</v-layout>
			</v-container>
		</v-layout>
	</v-app-bar>
</template>

<script>
// import * as easings from "vuetify/es5/services/goto/easing-patterns";
export default {
	data() {
		return {
			options: {
				duration: 300,
				offset: 0,
				easing: "easeInOutCubic",
			},
		};
	},
};
</script>

<style>
</style>
