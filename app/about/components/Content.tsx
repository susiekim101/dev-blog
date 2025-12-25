import Image from "next/image";
const Content = () => {

    return(
        <div className='mt-10'>
            <figure className='w-full aspect-[21/11] relative overflow-hidden mb-5'>
                <Image
                    src='https://mibtaq0s8mtr1i01.public.blob.vercel-storage.com/Susie_Kim_Headshot.png'
                    alt='Susie Kim headshot'
                    className='object-cover'
                    fill
                />
            </figure>
            <h1 className='text-2xl font-bold'>About Me</h1>

            <p className='my-4'>So here is more about me...</p>

            <h2 className='text-xl font-bold mt-6 mb-2'>Skills:</h2>
            <ul className='list-disc list-inside ml-4'>
                <li>One skill</li>
                <li>Another skill</li>
            </ul>

            <h2 className='text-xl font-bold mt-6 mb-2'>Experience:</h2>
            <ul className='list-disc list-inside ml-4'>
                <li>One experience</li>
                <li>Another experience</li>
            </ul>
            
            <h2 className='text-xl font-bold mt-6 mb-2'>Education:</h2>
            <ul className='list-disc list-inside ml-4'>
                <li>Currently pursuing a BS in Computer Science at the University of California, Los Angeles (UCLA)</li>
            </ul>

            <h3 className='text-lg font-bold mt-6 mb-2 ml-4'>Coursework: </h3>
            <ul className='list-disc list-inside ml-4'>
                <li>COM SCI 35L – Software Construction</li>
                <li>COM SCI M51A – Logic Design of Digital Systems</li>
                <li>COM SCI 33 – Introduction to Computer Organization</li>
                <li>COM SCI 32 – Introduction to Computer Science II (Data Structures and Algorithms)</li>
                <li>COM SCI 31 – Introduction to Computer Science I (Computer Programming Principles in C++)</li>
            </ul>
        </div>
    );
}

export default Content;