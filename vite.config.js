import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/,
				/\.md$/,
			],
			imports: [
				'vue',
				'vue-router',
				{
					pinia: ['defineStore', 'createPinia', 'storeToRefs'],
					axios: [['default', 'axios']],
					// dayjs: [['default', 'dayjs']],
					lodash: [['default', '_']],
					// '/src/store/store': [['default', 'useStore']],
					'/src/routes/index.js': [['default', 'router']],
				},
			],
			vueTemplate: true,
			dirs: ['./src/mixins', './src/modules'],
			dts: './auto-imports.d.ts',
			resolvers: [ElementPlusResolver()],
		}),

		Components({
			resolvers: [ElementPlusResolver()],
			dirs: ['src/components', 'src/components/views'],
			dts: true,
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
		}),
		vue(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	// css: {
	// 	preprocessorOptions: {
	// 		scss: {
	// 			additionalData: '@import "./src/assets/scss/common";',
	// 		},
	// 	},
	// },
	base: './',
});
