"use client";
import React, { useState, useEffect } from "react";
import classes from "./Change.module.css";

import { useFetch } from "@/hook/useFetch";
import { ShowModalDemo } from "../ui/Modal/ShowModal";
import AlertModal from "../ui/Modal/AlertModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { customerAction } from "@/redux/customer";

const DEFAULT_COUNTRY = [
	"Afghanistan",
	"Åland Islands",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cape Verde",
	"Cayman Islands",
	"Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands",
	"Colombia",
	"Comoros",
	"Congo",
	"Congo, The Democratic Republic of The",
	"Cook Islands",
	"Costa Rica",
	"Cote D'ivoire",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Ethiopia",
	"Falkland Islands (Malvinas)",
	"Faroe Islands",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-bissau",
	"Guyana",
	"Haiti",
	"Heard Island and Mcdonald Islands",
	"Holy See (Vatican City State)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran, Islamic Republic of",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea, Democratic People's Republic of",
	"Korea, Republic of",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libyan Arab Jamahiriya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Macedonia, The Former Yugoslav Republic of",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia, Federated States of",
	"Moldova, Republic of",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestinian Territory, Occupied",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Reunion",
	"Romania",
	"Russia",
	"Rwanda",
	"Saint Helena",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Pierre and Miquelon",
	"Saint Vincent and The Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and The South Sandwich Islands",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Eswatini",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan (ROC)",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States",
	"United States Minor Outlying Islands",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela",
	"Vietnam",
	"Virgin Islands, British",
	"Virgin Islands, U.S.",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
];

export default function ChangeProfile() {
	const selection = useAppSelector((state) => state.customer);
	const dispatch = useAppDispatch();
	const { data, loading, error, fetchData } = useFetch();

	const [dataForm, setDataForm] = useState({
		firstName: selection.firstName,
		lastName: selection.lastName,
		dob: selection.dob,
		country: selection.country,
	});
	const [confirm, setConfirm] = useState(false);
	const [showError, setShowError] = useState(false);

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		if ((dataForm.firstName.trim() === "", dataForm.lastName.trim() === "")) {
			setShowError(true);
			return;
		}
		fetchData({
			method: "PUT",
			link: "api/v1/profile",
			body: dataForm,
		});
		dispatch(customerAction.storeProfile(dataForm));
		setShowError(false);
		setConfirm(true);
	};
	const onConfirm = () => {
		setConfirm(false);
	};
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setDataForm((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};

	return (
		<>
			{data && confirm && (
				<ShowModalDemo onConfirm={onConfirm} element={<AlertModal />} />
			)}
			<form onSubmit={submitHandler} className={classes.form}>
				<label htmlFor="firstName" className={showError ? "error" : ""}>
					First Name
				</label>
				<input
					type="text"
					id="firstName"
					className={showError ? "error" : ""}
					value={dataForm.firstName}
					required
					onChange={handleChange}
				/>
				<label htmlFor="lastName" className={showError ? "error" : ""}>
					Last Name
				</label>
				<input
					type="text"
					className={showError ? "error" : ""}
					id="lastName"
					value={dataForm.lastName}
					onChange={handleChange}
				/>
				<label htmlFor="date">Date</label>
				<input
					type="date"
					id="dob"
					onChange={handleChange}
					value={dataForm.dob ? dataForm.dob.slice(0, 10) : "2020-01-01"}
					required
				/>
				<label htmlFor="country">Country</label>
				<select
					id="country"
					value={dataForm.country ? dataForm.country : "Afghanistan"}
					onChange={handleChange}
				>
					{DEFAULT_COUNTRY.map((country) => (
						<option key={country} value={country}>
							{country}
						</option>
					))}
				</select>
				<button className="button" type="submit">
					Save Changes
				</button>
			</form>
		</>
	);
}
