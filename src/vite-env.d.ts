/// <reference types="vite/client" />

// Allow importing image and media asset types in TypeScript
declare module '*.avif';
declare module '*.bmp';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';
declare module '*.svg' {
	const src: string;
	export default src;
}
