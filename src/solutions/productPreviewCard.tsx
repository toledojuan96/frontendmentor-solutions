const ProductPreviewCard = () => {


    return (
        <main className="font-montserrat bg-[#F2EAE2] min-h-screen flex justify-center items-center">
            <article className="bg-white flex flex-col w-[343px] rounded-2xl overflow-hidden sm:flex-row sm:w-[600px]">
                <picture className="object-none" >
                    <source srcSet="/productPreviewCard/image-product-mobile.jpg" media="(max-width: 639px)"/>
                    <img className="w-[343px] sm:w-[300px] max-w-none" src="/productPreviewCard/image-product-desktop.jpg" alt="product preview"/>
                </picture>


                <div className="p-6 sm:p-8 ">
                    <h1 className="font-medium text-[12px] tracking-[5px] text-[#6C7289]">PERFUME</h1>
                    <h2 className="mt-3 sm:mt-5 font-bold text-[32px] leading-[32px] font-fraunces">Gabrielle Essence
                        Eau De
                        Parfum</h2>
                    <p className="mt-5 sm:mt-6 font-medium text-[14px] leading-[23px] text-[#6C7289]">A floral, solar
                        and
                        voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the
                        House of CHANEL.</p>
                    <h3 className="mt-6 sm:mt-7 text-[#3D8168] font-fraunces leading-[32px] text-[32px] font-bold flex items-center gap-[19px]">$149.99 <span
                        className="font-montserrat font-medium leading-[23px] text-[13px] line-through text-[#6C7289]">$169.99</span>
                    </h3>
                    <button
                        className="hover:bg-[#1A4032] mt-[20px] sm:mt-[24px] bg-[#3D8168] text-white flex items-center justify-center w-full gap-1 rounded-[8px] py-[14px]">
                        <img src="/productPreviewCard/icon-cart.svg" alt="cart icon"/>
                        Add to Cart
                    </button>
                </div>

            </article>
        </main>
    )

}

export default ProductPreviewCard