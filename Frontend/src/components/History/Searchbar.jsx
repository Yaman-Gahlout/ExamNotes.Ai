import { motion } from "framer-motion";
import { FaSearch, FaTimes, FaFilter, FaSortAmountDown } from "react-icons/fa";

export default function Searchbar({
  search,
  setSearch,
  difficulty,
  setDifficulty,
  sortBy,
  setSortBy,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
      rounded-[28px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-4
      "
    >
      <div
        className="
        flex
        flex-col
        lg:flex-row
        gap-4
        "
      >
        {/* Search */}

        <div className="relative flex-1">
          <FaSearch
            className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-slate-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notes, topics, keywords..."
            className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-[#0F172A]/70
            py-4
            pl-14
            pr-14
            text-white
            outline-none
            transition
            focus:border-purple-500/40
            focus:ring-4
            focus:ring-purple-500/10
            placeholder:text-slate-500
            "
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white/5
              hover:bg-red-500/10
              hover:text-red-400
              transition
              "
            >
              <FaTimes size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Quick Filters */}

      <div
        className="
        mt-4
        flex
        flex-wrap
        gap-2
        "
      >
        {["DSA", "DBMS", "OS", "CN", "React", "Java", "MERN"].map((tag) => (
          <button
            key={tag}
            onClick={() => setSearch(tag)}
            className="
            rounded-full
            border
            border-purple-500/20
            bg-purple-500/10
            px-4
            py-2
            text-sm
            text-purple-300
            transition
            hover:bg-purple-500/20
            "
          >
            #{tag}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
