export default function LocationSection() {
  return (
    <div className="space-y-6 py-12">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
        Where you’ll be
      </h2>

      {/* Map */}
      <div className="w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] bg-gray-200 rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0470677342206!2d101.69320711532437!3d3.1390034977134467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362f1c33f8e7%3A0x84b8af8d1a0fca5f!2sKuala%20Lumpur%20City%20Centre!5e0!3m2!1sen!2smy!4v1633612345678!5m2!1sen!2smy"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map of location" 
        ></iframe>
      </div>

      {/* Location details */}
      <div className="space-y-3 text-gray-700">
        <p className="font-medium text-base sm:text-lg text-gray-900">
          Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia
        </p>
        <p className="text-sm sm:text-base">
          We are located beside KL city centre, you can travel to attraction spots
          by LRT or e-hailing easily.
        </p>
        <p className="text-sm sm:text-base">
          An abundance of Restaurants, Night Life and Malls nearby too….
        </p>
        <button className="text-sm font-medium underline hover:text-gray-900">
          Show more
        </button>
      </div>
    </div>
  );
}
