<template>
	<div class="main">
		<hero
			:title="'Digital Twin Provider | Market overview'"
			:sub="'Overview of various digital twin software solutions'"
		/>
		<div class="container">
			<div class="header">
				<div class="flex-item">
					<h2>Compare Providers</h2>
				</div>
			</div>
			<div class="topic"><h3>Please select 2 providers to compare</h3></div>
			<div class="row">
				<div class="column">
					<v-select
						class="filtetr-select"
						:options="providers"
						label="anbieter"
						placeholder="Provider 1"
						@input="selectProvider1"
					></v-select>
				</div>
				<div class="column">
					<v-select
						class="filtetr-select"
						:options="providers"
						label="anbieter"
						placeholder="Provider 2"
						@input="selectProvider2"
					></v-select>
				</div>
			</div>
			<div class="btn-component"><button class="compare-btn" @click="compare">Compare</button></div>
			<div>
				<div class="providers">
					<template v-for="(provider, index) in selectedProviders">
						<a :href="provider.link" :key="index">
							<div class="provider">
								<div class="card-header">
									<div class="heading">
										<h3>{{ provider.anbieter }}</h3>
										<span
											v-bind:class="{
												highlight: selectedProviders[0].angebot == selectedProviders[1].angebot,
											}"
											class="sub"
											>{{ provider.angebot }}</span
										>
									</div>
								</div>
								<div class="card-body">
									<ul class="info-list">
										<li>
											<h5>Product name</h5>
											<span
												v-bind:class="{
													highlight:
														selectedProviders[0].produktname ==
														selectedProviders[1].produktname,
												}"
												>{{ provider.produktname }}</span
											>
										</li>
									</ul>
									<div class="info-box">
										<h4>Specialization</h4>
										<span
											v-bind:class="{
												highlight:
													selectedProviders[0].spezialisierung.includes(item) &&
													selectedProviders[1].spezialisierung.includes(item),
											}"
											v-for="item in provider.spezialisierung"
											:key="item"
											>{{ item }}</span
										>
									</div>

									<div class="info-box">
										<h4>Range of functions</h4>
										<span
											v-bind:class="{
												highlight:
													selectedProviders[0].funktionsumfang.includes(item) &&
													selectedProviders[1].funktionsumfang.includes(item),
											}"
											v-for="item in provider.funktionsumfang"
											:key="item"
											>{{ item }}</span
										>
									</div>

									<ul class="info-list">
										<li>
											<h5>Is the software operation offered</h5>
											<span
												v-bind:class="{
													highlight:
														selectedProviders[0].wird_der_software_betrieb_angebote ==
														selectedProviders[1].wird_der_software_betrieb_angebote,
												}"
												>{{ provider.wird_der_software_betrieb_angebote }}</span
											>
										</li>
										<li>
											<h5>Country</h5>
											<span
												v-bind:class="{
													highlight: selectedProviders[0].land == selectedProviders[1].land,
												}"
												>{{ provider.land }}</span
											>
										</li>
										<li>
											<h5>No-Code Plattform</h5>
											<span
												v-bind:class="{
													highlight:
														selectedProviders[0].noCode_plattform ==
														selectedProviders[1].noCode_plattform,
												}"
												>{{ provider.noCode_plattform }}</span
											>
										</li>
										<li>
											<h5>Cloud optmized</h5>
											<span
												v-bind:class="{
													highlight:
														selectedProviders[0].cloud_optmiert ==
														selectedProviders[1].cloud_optmiert,
												}"
												>{{ provider.cloud_optmiert }}</span
											>
										</li>
										<li>
											<h5>Where is the cloud solution operated</h5>
											<span
												v-bind:class="{
													highlight:
														selectedProviders[0].wo_wird_cloud_lösung_betrieben ==
														selectedProviders[1].wo_wird_cloud_lösung_betrieben,
												}"
												>{{ provider.wo_wird_cloud_lösung_betrieben }}</span
											>
										</li>
										<li>
											<h5>Can other systems be connected</h5>
											<span
												v-bind:class="{
													highlight:
														selectedProviders[0].können_weitere_systeme_angebunden_werden ==
														selectedProviders[1].können_weitere_systeme_angebunden_werden,
												}"
												>{{ provider.können_weitere_systeme_angebunden_werden }}</span
											>
										</li>
										<li>
											<h5>Creation time</h5>
											<span
												v-bind:class="{
													highlight:
														selectedProviders[0].erstellungszeitpunkt ==
														selectedProviders[1].erstellungszeitpunkt,
												}"
												>{{ provider.erstellungszeitpunkt }}</span
											>
										</li>
									</ul>

									<div class="price-box">
										<h3>Price</h3>
										<span
											v-bind:class="{
												highlight: selectedProviders[0].preis == selectedProviders[1].preis,
											}"
											>{{ provider.preis }}</span
										>
									</div>
								</div>
							</div>
						</a>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Hero from '../components/Hero';
import Providers from '../data/providers.json';

export default {
	name: 'compare',

	components: {
		Hero,
	},

	data() {
		return {
			providers: Providers,
			selcetedProvider1: null,
			selcetedProvider2: null,
			selectedProviders: [],
		};
	},

	methods: {
		selectProvider1(item) {
			this.selcetedProvider1 = this.providers[item.id - 1];
			console.log(this.selcetedProvider1);
		},
		selectProvider2(item) {
			this.selcetedProvider2 = this.providers[item.id - 1];
		},
		compare() {
			// alert('db')
			this.selectedProviders = [this.selcetedProvider1, this.selcetedProvider2];
		},
	},
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin-top: 50px;
	margin-bottom: 35px;
}

.header h2 {
	color: rgb(51, 51, 51);
	font-weight: 400;
	width: 100%;
	min-width: 200px;
}

.header p {
	color: rgb(116, 116, 116);
	font-size: 16px;
	width: 100%;
	min-width: 500px;
}

.flex-item {
	flex: 1;
}
.row {
	width: 100%;
	display: flex;
}
.column {
	width: 50%;
	padding: 10px;
}
.topic h3 {
	color: rgb(51, 51, 51);
	font-weight: 400;
}
.providers {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	grid-gap: 20px;
	margin-top: 40px;
}

.providers a {
	text-decoration: none;
}

.provider {
	overflow: hidden;
	background-color: #fbfbfb;
	box-shadow: 0px 3px 10px rgb(0 0 0 / 8%);
	height: 100%;
}

.heading {
	padding: 20px 20px 18px;
}

.card-header h3 {
	font-weight: 600;
	font-size: 17px;
	color: #e10707;
	margin-bottom: 5px;
}

.card-header .sub {
	font-size: 15px;
	color: #747474;
}

.provider-img {
	width: 100%;
	height: 240px;
	position: relative;
	background-color: #f0f0f0;
}

.provider-img img {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	object-fit: cover;
}

.card-body {
	padding: 0px 20px 20px;
}

.info-box {
	padding: 15px 0px;
	border-bottom: 1px solid #ccc;
	font-size: 14px;
}

.info-box:first-child {
	border-top: 1px solid #ccc;
}

.info-box h4 {
	margin-bottom: 10px;
	font-size: 16px;
	color: #000;
}

.info-box span {
	border-right: 1px solid #e10707;
	padding: 0px 4px;
	display: inline-block;
	color: #000;
}

.info-box span:first-child {
	padding: 0px 4px 0px 0px;
}

.info-box span:last-child {
	border-right: 0px;
}

.info-list {
	list-style: none;
	padding: 0px;
	margin: 0px;
	margin-top: 20px;
}

.info-list li {
	padding: 5px 0px;
	border-bottom: 1px solid #ccc;
}

.info-list li h5 {
	font-size: 14px;
	margin-bottom: 4px;
	color: #000;
}

.info-list li span {
	font-size: 14px;
	color: #747474;
}

.price-box {
	padding: 15px 0px 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}

.price-box h3 {
	color: #000;
}

.price-box span {
	color: #e10707;
	font-weight: 700;
}
.highlight {
	background-color: #2ed02e;
	color: white !important;
	padding: 1px 5px;
}
.compare-btn {
	display: block;
	width: 100%;
	max-width: 300px;
	padding: 10px 20px;
	background-color: rgb(53, 53, 53);
	border: 0px;
	border-radius: 0px;
	color: #fff;
	font-size: 18px;
	font-weight: 700;
	cursor: pointer;
	transition: all 0.3s;
	margin-bottom: 15px;
	margin: 0px 10px;
}
.compare-btn:hover {
  background-color: #e10707;
}
.btn-component{
	display: flex;
    justify-content: center;
}
</style>
