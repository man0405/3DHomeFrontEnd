import React from "react";
import classes from "./Profile.module.css";

export default function Profile() {
	return (
		<section className="container">
			<div className={classes.inf}>
				<img
					className={classes.back}
					loading="lazy"
					srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/036412b1-eb95-4044-a5df-d15c6f9a2ba8?apiKey=433e7d89c0f24759b3ef363fc5264f4b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/036412b1-eb95-4044-a5df-d15c6f9a2ba8?apiKey=433e7d89c0f24759b3ef363fc5264f4b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/036412b1-eb95-4044-a5df-d15c6f9a2ba8?apiKey=433e7d89c0f24759b3ef363fc5264f4b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/036412b1-eb95-4044-a5df-d15c6f9a2ba8?apiKey=433e7d89c0f24759b3ef363fc5264f4b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/036412b1-eb95-4044-a5df-d15c6f9a2ba8?apiKey=433e7d89c0f24759b3ef363fc5264f4b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/036412b1-eb95-4044-a5df-d15c6f9a2ba8?apiKey=433e7d89c0f24759b3ef363fc5264f4b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/036412b1-eb95-4044-a5df-d15c6f9a2ba8?apiKey=433e7d89c0f24759b3ef363fc5264f4b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/036412b1-eb95-4044-a5df-d15c6f9a2ba8?apiKey=433e7d89c0f24759b3ef363fc5264f4b&"
				/>
				<div className={classes.avatar}>
					<img src="/assets/images/photo-1545324418-cc1a3fa10c00.webp" alt="" />
					<div className={classes.content}>
						<div className={classes.name}>Omar Sulaiman</div>
						<div className={classes.phone}>+84 339228240</div>
					</div>
				</div>
			</div>
		</section>
	);
}
