<template>
	<div class="home">
		<v-img
			dark
			max-height="750px"
			src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
		>
			<v-layout fill-height align-center>
				<v-container>
					<v-row align="center" justify="center" class="white--text">
						<v-col cols="12" style="text-shadow: 0 1px 0 black">
							<div
								:class="{
									'display-2 font-weight-bold ':
										$vuetify.breakpoint.smAndUp,
									'title font-weight-bold':
										$vuetify.breakpoint.smAndDown,
								}"
							>
								Welcome to my site!
							</div>
							<div
								:class="{
									headline: $vuetify.breakpoint.smAndUp,
									'subtitle-1': $vuetify.breakpoint.smAndDown,
								}"
							>
								I am a Full-Stack Developer who Design &amp;
								Develop Web &amp; Mobile Applications
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
					<v-row>
						<v-col cols="4">
							<v-img
								src="../assets/portrait.jpeg"
								max-width="100%"
								max-height="auto"
							>
							</v-img>
						</v-col>
						<v-col cols="8">
							<v-row>
								<v-col cols="12">
									I am a software engineer with robust
									problem-solving skills and proven experience
									in creating software and adapting to new
									circumstances.
								</v-col>
								<v-col cols="12">
									<h2>Skills</h2>
								</v-col>
								<v-col cols="12">
									<v-row>
										<v-col
											cols="3"
											v-for="skill in skills"
											:key="skill.name"
										>
											<p>{{ skill.name }}</p>
											<v-progress-linear
												v-model="skill.score"
												color="lime"
												height="25"
											>
												<template
													v-slot:default="{ value }"
												>
													<strong
														>{{
															Math.ceil(value)
														}}%</strong
													>
												</template>
											</v-progress-linear>
										</v-col>
									</v-row>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
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
			skills: [
				{
					name: "HTML",
					score: "80",
				},
				{
					name: "CSS",
					score: "60",
				},
				{
					name: "JavaScript",
					score: "80",
				},
				{
					name: "Java",
					score: "70",
				},
				{
					name: "Python",
					score: "70",
				},
				{
					name: "GoLang",
					score: "40",
				},
				{
					name: "C#",
					score: "50",
				},
				{
					name: "TypeScript",
					score: "60",
				},
				{
					name: "ReactJS",
					score: "80",
				},
				{
					name: "NuxtJS",
					score: "80",
				},
				{
					name: "Flask",
					score: "60",
				},
				{
					name: "Bootstrap",
					score: "60",
				},
				{
					name: "Figma",
					score: "70",
				},
				{
					name: "Axure",
					score: "60",
				},
				{
					name: "InVision Studio",
					score: "70",
				},
			],
			apps: [
				{
					name: "LyricFindr",
					price: "LIVE",
					logo: "lyric-findr-logo.png",
					platforms: [
						{
							name: "web",
							icon: "mdi-web",
							link: "https://lyric-findr.tk/",
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
