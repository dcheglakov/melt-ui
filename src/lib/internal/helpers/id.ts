import { nanoid } from 'nanoid';

/**
 * A function that generates a random id
 * @returns An id
 */
export function generateId() {
	return nanoid(10);
}
