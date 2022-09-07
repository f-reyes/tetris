import { tetromino } from './interfaces';

export const L = {
	shape: 'L',
	color: 'blue',
	facing: 0, ///Current rotation, 0 = up, 1 = right, 2 = down, 3 = left.
	moving: true,
	coords: {
		/**
		 * This is the position of the square that the other squares will rotate around.
		 * When this property is updated, the other squares will be mapped around it.
		 * This could be considered the "true" position of the entire tetromino.
		 */
		axis: {
			x: 4,
			y: 1
		},
		/**
		 * The shapeCoords property tells where the squares around the axis are
		 * depending on the rotation, describing the shape of the tetromino
		 */
		shapeCoords: {
			facingUpPoints: [
				///(x, y)
				[0, 0],
				[-1, 0],
				[1, 0],
				[-1, -1]
			],
			facingRightPoints: [
				[0, 0],
				[0, 1],
				[0, -1],
				[1, -1]
			],
			facingDownPoints: [
				[0, 0],
				[1, 0],
				[-1, 0],
				[1, 1]
			],
			facingLeftPoints: [
				[0, 0],
				[0, 1],
				[0, -1],
				[-1, 1]
			]
		}
	}
};

export const I = {
	shape: 'I',
	color: 'cyan',
	facing: 0,
	moving: true,
	coords: {
		axis: {
			x: 5,
			y: 1
		},

		shapeCoords: {
			facingUpPoints: [
				///(x, y)
				[0, 0],
				[-1, 0],
				[-2, 0],
				[1, 0]
			],
			facingRightPoints: [
				[-1, 0],
				[-1, 1],
				[-1, 2],
				[-1, -1]
			],
			facingDownPoints: [
				[0, 1],
				[-1, 1],
				[-2, 1],
				[1, 1]
			],
			facingLeftPoints: [
				[0, 0],
				[0, 1],
				[0, 2],
				[0, -1]
			]
		}
	}
};
