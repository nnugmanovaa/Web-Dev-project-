import { Product } from './products'

export class Category {
	id: number;
	name: string;
	link: string;
	products: Product[];

	constructor(id: number, name: string,link: string, products: Product[]){
		this.id = id;
		this.name = name;
		this.link = link;
		this.products = products;
	}
}


export const categories: Category[] = [
	new Category(1, "Skirts", "https://lp.monki.com/app002prod?set=source[01_0679978_035_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[202001200842]&call=url[file:/product/zoom]", 
		[new Product(1, 'Pleated midi skirt', 35, "https://lp.monki.com/app002prod?set=source[01_0679978_035_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[202001200842]&call=url[file:/product/zoom]")]
		),
	new Category(2, "Dresses", "https://lp.monki.com/app002prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[483]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=key[resolve.quality],value[90]&set=source[/0b/cc/0bccb5711ffc53a982729f42a40c655b34c2c861.jpg],origin[dam],type[LOOKBOOK],ImageVersion[1]&call=url[file:/product/dynamic.chain]", 
		[new Product(1, 'Ruffle hem midi dress', 35, "https://lp.monki.com/app002prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[483]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=key[resolve.quality],value[90]&set=source[/0b/cc/0bccb5711ffc53a982729f42a40c655b34c2c861.jpg],origin[dam],type[LOOKBOOK],ImageVersion[1]&call=url[file:/product/dynamic.chain]")]
		),
	new Category(3, "Coats and jackets", 'https://lp.monki.com/app002prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[483]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=key[resolve.quality],value[90]&set=source[01_0689589_002_002],type[ECOMLOOK],ImageVersion[201912131432]&call=url[file:/product/dynamic.chain]', 
		[new Product(1, 'Oversized utility coat', 70, 'https://lp.monki.com/app002prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[483]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=key[resolve.quality],value[90]&set=source[01_0689589_002_002],type[ECOMLOOK],ImageVersion[201912131432]&call=url[file:/product/dynamic.chain]')]
		),
	new Category(4, "Trousers", "https://lp.monki.com/app002prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[483]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=key[resolve.quality],value[90]&set=source[/48/30/48301f087bdd35b110e4c8340d035f2e86e46c20.jpg],origin[dam],type[LOOKBOOK],ImageVersion[1]&call=url[file:/product/dynamic.chain]",
		[new Product(1, 'Twilled cotton trousers', 40, 'https://lp.monki.com/app002prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[483]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=key[resolve.quality],value[90]&set=source[/48/30/48301f087bdd35b110e4c8340d035f2e86e46c20.jpg],origin[dam],type[LOOKBOOK],ImageVersion[1]&call=url[file:/product/dynamic.chain]')]
		),
	new Category(5, "Tops", "https://lp.monki.com/app002prod?set=source[/e9/8e/e98e6d25a0df3e95e841e5245c9a67fb752bd732.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/zoom]",
		[new Product(1, "Boxy short-sleeve blouse",25, "https://lp.monki.com/app002prod?set=source[/e9/8e/e98e6d25a0df3e95e841e5245c9a67fb752bd732.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/zoom]")]
		),
	new Category(6, "Jeans", "https://lp.monki.com/app002prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[483]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=key[resolve.quality],value[90]&set=source[01_0265338_003_001],type[ECOMLOOK],ImageVersion[202001241622]&call=url[file:/product/dynamic.chain]",
		[new Product(1, "Kimomo mid blue jeans", 50, "https://lp.monki.com/app002prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[483]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=key[resolve.quality],value[90]&set=source[01_0265338_003_001],type[ECOMLOOK],ImageVersion[202001241622]&call=url[file:/product/dynamic.chain]")]
		),
	new Category(7, "Underwear", "https://www.monki.com/content/dam/Monki/category-images/2020/w7-9/monki-nofilter-7-0709-ss20-472x708.jpg",
 		[new Product(1, "Triangle Bralette", 18, "https://www.monki.com/content/dam/Monki/category-images/2020/w7-9/monki-nofilter-7-0709-ss20-472x708.jpg")]
		),
	new Category(8, "Shoes", "https://lp.monki.com/app002prod?set=source[/d0/93/d09305351d00df89c56cb0354fef637a149d2c82.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/zoom]",
		[new Product(1, "Sandal heels", 35, "https://lp.monki.com/app002prod?set=source[/d0/93/d09305351d00df89c56cb0354fef637a149d2c82.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/zoom]")] 
		),
	new Category(9, "Socks and tights", "https://lp.monki.com/app002prod?set=source[02_0866318_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[202002111012]&call=url[file:/product/zoom]",
		[new Product(1, "5-pack Monki socks", 13, "https://lp.monki.com/app002prod?set=source[02_0866318_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[202002111012]&call=url[file:/product/zoom]")]
		),
	new Category(10, "Hats, scarves and gloves", "https://lp.monki.com/app002prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/56/ce/56ce1c2dc9b890f9f6f3474d6a06f229592cbb64.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D",
 		[new Product(1, "Wide brim bucket hat", 18, "https://lp.monki.com/app002prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/56/ce/56ce1c2dc9b890f9f6f3474d6a06f229592cbb64.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D")]
		),
	new Category(11, "Bags, wallets and belts", "https://lp.monki.com/app002prod?set=source[02_0685292_010_101],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019101]&call=url[file:/product/zoom]",
		[new Product(1, "Tote bag", 10, "https://lp.monki.com/app002prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2019101%5D,source%5B02_0805196_002_101%5D,type%5BPRODUCT%5D&call=url%5Bfile:/product/dynamic.chain%5D")]
		),
	new Category(12, "Sunglasses", "https://lp.monki.com/app002prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2019101%5D,source%5B02_0610587_014_101%5D,type%5BPRODUCT%5D&call=url%5Bfile:/product/dynamic.chain%5D",
		[new Product(1, "Cat eye sunglasses", 15, "https://lp.monki.com/app002prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2019101%5D,source%5B02_0610587_014_101%5D,type%5BPRODUCT%5D&call=url%5Bfile:/product/dynamic.chain%5D")]
		)
]