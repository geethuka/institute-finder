"use client";

type ApplyModalProps = {
  onClose: () => void;
};

export default function ApplyModal({ onClose }: ApplyModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-blue-950">
            Apply Now
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-slate-500 hover:text-slate-800"
          >
            &times;
          </button>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Fill in the details below and we will get back to you soon.
        </p>

        <form className="mt-5" onSubmit={(event) =>{event.preventDefault();
            alert("Application submitted successfully!");
            onClose();
        }}>
           <div>
             <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                Name
            </label>
            <input type="text" placeholder="Enter your name" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" required/>
           </div>


           <div>
             <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700 mt-4">
                Phone Number
            </label>
            <input id="phone" type="tel" placeholder="Enter your phone number" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" required/>
           </div>

           <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 mt-4">
                Email ID
            </label>
            <input type="email" placeholder="Enter your email address" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" required/>
           </div>

           <div>
           <label htmlFor="place" className="mb-1 block text-sm font-medium text-slate-700 mt-4">
                Place
            </label>
            <input type="text" placeholder="Enter your place" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" required/>
             
           </div>

           <button type="submit" className="mt-6 w-full rounded-lg items-center justify-center gap-2 bg-blue-400 py-3 px-5 font-medium text-white transition hover: bg-blue-700">
            Submit<span aria-hidden="true"></span>
           </button>
        </form>

      </div>
    </div>
  );
}