import  {Router} from 'itty-router';
import IndexHtml from './htmls/dist/index.txt';
import AboutHtml from './htmls/dist/about.txt';
import BlogHtml from './htmls/dist/blog.txt';
import PortfolioHtml from './htmls/dist/portfolio.txt';
import F04Html from './htmls/dist/404.txt';
export default {
	async fetch(request, env, ctx) {
		console.log(request.url)
		const router = Router();

		router.get("/portfolio",()=>{
			return new Response(PortfolioHtml,{
				headers:{
					'Content-Type':'text/html'
				}
			})
		})

		router.get('/blog',()=>{
			return new Response(BlogHtml,{
				headers:{
					'Content-Type':'text/html'
				}
			})
		})

		router.get('/about', () => new Response(AboutHtml,{
			headers:{
				'Content-Type':'text/html'
			}
		}));

		router.get('/',()=>{return new Response(IndexHtml,{
			headers:{
				'Content-Type':'text/html'
			}
		})});

		//any 
		router.all('*', () => new Response(F04Html,{
			headers:{
				'Content-Type':'text/html'
			}
		}));

		return router.handle(request);


		// return new Response(JSON.stringify({
		// 	url:request.url,
		// 	path:path
		// }));
	},
};