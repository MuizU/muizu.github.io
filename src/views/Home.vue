<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<v-img
			dark
			max-height="500px"
			src="https://unsplash.com/photos/95YRwf6CNw8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
		>
			<v-layout fill-height align-center>
				<v-container>
					<v-row align="center" justify="center" class="white--text">
						<v-col cols="12">
							<div
								:class="{
									'display-2 font-weight-bold ':
										$vuetify.breakpoint.smAndUp,
									'title font-weight-bold':
										$vuetify.breakpoint.smAndDown,
								}"
							>
								Welcome to my page.
							</div>
							<div
								:class="{
									headline: $vuetify.breakpoint.smAndUp,
									'subtitle-1': $vuetify.breakpoint.smAndDown,
								}"
							>
								I Build applications.
							</div>
						</v-col>
					</v-row>
				</v-container>
			</v-layout>
		</v-img>
		<v-container class="mt-5">
			<v-layout wrap>
				<v-flex xs12>
					<div class="display-1 font-weight-bold" id="about">
						About
					</div>
				</v-flex>
				<v-flex xs12 mt-5>
					<div class="body-1">{{ aboutText }}</div>
					<div class="body-1 mt-3">
						Working on starting an app development business and
						always looking for new clients! Would love to talk to
						you about your idea.
					</div>
				</v-flex>
			</v-layout>
			<v-layout wrap my-5>
				<v-flex xs12>
					<div class="display-1 font-weight-bold" id="portfolio">
						My Projects
					</div>
				</v-flex>
				<v-flex xs12 class="mt-5">
					<v-layout wrap>
						<template v-for="(app, i) in apps">
							<v-flex xs12 sm6 md4 :key="i">
								<p-portfolio-app :app="app" />
							</v-flex>
						</template>
					</v-layout>
				</v-flex>
			</v-layout>
			<v-layout wrap my-5>
				<v-flex xs12 mb-5>
					<div class="display-1 font-weight-bold" id="contact">
						Contact Me
					</div>
				</v-flex>
				<template v-for="(contact, i) in contactLinks">
					<v-flex sm6 md4 xs12 :key="i">
						<p-contact-info :contact="contact" />
					</v-flex>
				</template>
			</v-layout>
			<!-- <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold">Press</div>
        </v-flex>
        <v-flex xs12>
          <v-layout>
            <v-card width="">
              <v-card-title>Press card</v-card-title>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>-->
		</v-container>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PContactInfo from "@/components/PContactInfo.vue";
export default {
	name: "home",
	components: {
		// HelloWorld,
		PPortfolioApp,
		PContactInfo,
	},
	data() {
		return {
			aboutText:
				"I enjoy building apps in my free time when I'm not doing much. I'm also not that good of a writer as you can see. Anyways, you are free to download any of the code thats on my github! And I hope you have a great day!",
			apps: [
				{
					name: "LyricFindr",
					price: "LIVE",
					logo: "lyric-findr-logo.png",
					platforms: [
						{
							name: "web",
							icon: "mdi-web",
							link: "https://lyric-findr-9703ec.netlify.app/",
						},
					],
					description:
						"I needed a place to search for lyrics. I came up with LyricFindr to be able to search for songs and find the relevant lyrics.",
					technologies: [
						{
							name: "ReactJs",
							icon: "mdi-react",
							link: "https://reactjs.org/",
						},
						{
							name: "Bootstrap",
							icon: "mdi-bootstrap",
							link: "https://getbootstrap.com/",
						},
						{
							name: "Netlify",
							icon: "mdi-netlify",
							link: "https://www.netlify.com/",
						},
					],
					code: {
						name: "github",
						icon: "mdi-github",
						link: "https://github.com/MuizU/lyric-findr",
					},
				},
			],
			contactLinks: [
				{
					name: "Email",
					value: "muizuvais99@gmail.com",
					link: "mailto:muizuvais99@gmail.com",
					icon: "mdi-email",
				},
				{
					name: "LinkedIn",
					value: "Muiz Uvais",
					link: "https://www.linkedin.com/in/muiz-uvais",
					icon: "mdi-linkedin",
				},
				{
					name: "Github",
					value: "MuizU",
					link: "https://github.com/MuizU/",
					icon: "mdi-github",
				},
				{
					name: "Facebook",
					value: "Muiz Uvais",
					link: "https://www.facebook.com/muiz.uvais1/",
					icon: "mdi-facebook",
				},
				{
					name: "Instagram",
					value: "@muiz_uvais",
					link: "https://www.instagram.com/muiz_uvais/",
					icon: "mdi-instagram",
				},
			],
		};
	},
};
</script>
