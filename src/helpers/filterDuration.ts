import { ITrip } from "src/@types";
export default function filterDuration(duration: string, trip: ITrip): boolean {
	switch (duration) {
		case "0_x_5":
			return trip.duration <= 5;
		case "5_x_10":
			return trip.duration > 5 && trip.duration <= 10;
		case "10_x":
			return trip.duration > 10;
		default:
			return true;
	}
}
