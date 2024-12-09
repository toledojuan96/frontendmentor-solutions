


const BlogPreviewCard = ()=>{
    return (
       <main className="bg-yellow-300 h-screen flex justify-center items-center font-figtree ">
           <div className=" bg-white flex flex-col items-start w-[327px] p-6 rounded-[20px] gap-6 sm:max-w-[384px] sm:w-full drop-shadow-[8px_8px_rgba(0,0,0)]">
               <img src="/blogPreviewCard/illustration-article.svg" alt="illustration" className="rounded-[10px] w-full"/>
               <div className="flex flex-col gap-3 text-neutral-950 items-start">
                   <h3 className="bg-yellow-300 px-3 py-1 rounded-[4px] font-extrabold text-[12px]">Learning</h3>
                   <h5 className="font-medium text-[12px]">Published 21 Dec 2023</h5>
                   <h2 className="font-extrabold text-[20px] hover:text-yellow-300 hover:cursor-pointer">HTML & CSS foundations</h2>
                   <p className="text-neutral-500 font-medium text-[14px] sm:text-[16px]">These languages are the backbone of every website, defining structure, content, and presentation.</p>
               </div>
                <div className="flex gap-3 items-center">
                    <img src="/blogPreviewCard/image-avatar.webp" alt="avatar" className="size-8"/>
                    <span className="font-bold">Greg Hooper</span>
                </div>
           </div>
       </main>
    )
}

export default BlogPreviewCard;