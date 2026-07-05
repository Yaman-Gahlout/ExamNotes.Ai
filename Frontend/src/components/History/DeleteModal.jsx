import { AnimatePresence, motion } from "framer-motion";
import { FaTrash, FaExclamationTriangle, FaTimes } from "react-icons/fa";

export default function DeleteModal({ isOpen, onClose, onConfirm, noteTitle }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
          fixed
          inset-0
          z-[999]
          flex
          items-center
          justify-center
          bg-black/60
          backdrop-blur-md
          p-4
          "
          onClick={onClose}
        >
          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
            relative
            w-full
            max-w-xl
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-[#0F172A]/90
            backdrop-blur-2xl
            "
          >
            {/* Glow Effects */}

            <div
              className="
              absolute
              -top-24
              -left-24
              h-72
              w-72
              rounded-full
              bg-red-500/15
              blur-[120px]
              "
            />

            <div
              className="
              absolute
              -bottom-24
              -right-24
              h-72
              w-72
              rounded-full
              bg-purple-600/15
              blur-[120px]
              "
            />

            {/* Gradient Top Border */}

            <div
              className="
              h-[3px]
              bg-gradient-to-r
              from-red-500
              via-orange-500
              to-yellow-500
              "
            />

            <div className="relative z-10 p-8 md:p-10">
              {/* Close */}

              <button
                onClick={onClose}
                className="
                absolute
                right-6
                top-6
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                "
              >
                <FaTimes />
              </button>

              {/* Warning Icon */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                mx-auto
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-red-500
                to-orange-500
                shadow-lg
                shadow-red-500/20
                "
              >
                <FaExclamationTriangle size={36} />
              </motion.div>

              {/* Heading */}

              <h2
                className="
                mt-8
                text-center
                text-3xl
                md:text-4xl
                font-black
                "
              >
                Delete Note?
              </h2>

              {/* Subtitle */}

              <p
                className="
                mt-4
                text-center
                text-slate-400
                leading-7
                "
              >
                This action is permanent and cannot be undone.
              </p>

              {/* Note Title */}

              <div
                className="
                mt-8
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-5
                "
              >
                <p
                  className="
                  text-sm
                  text-slate-500
                  "
                >
                  Selected Note
                </p>

                <h3
                  className="
                  mt-2
                  text-xl
                  font-bold
                  text-cyan-300
                  "
                >
                  {noteTitle}
                </h3>
              </div>

              {/* Warning Box */}

              <div
                className="
                mt-6
                rounded-2xl
                border
                border-red-500/20
                bg-red-500/10
                p-4
                text-sm
                text-red-300
                "
              >
                ⚠️ All generated notes, revision material, MCQs, interview
                questions and associated content will be permanently removed.
              </div>

              {/* Actions */}

              <div
                className="
                mt-8
                flex
                flex-col-reverse
                md:flex-row
                gap-4
                "
              >
                {/* Cancel */}

                <button
                  onClick={onClose}
                  className="
                  flex-1
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-4
                  font-semibold
                  hover:bg-white/10
                  transition
                  "
                >
                  Cancel
                </button>

                {/* Delete */}

                <motion.button
                  whileTap={{
                    scale: 0.96,
                  }}
                  onClick={onConfirm}
                  className="
                  flex-1
                  rounded-2xl
                  bg-gradient-to-r
                  from-red-600
                  to-orange-500
                  px-6
                  py-4
                  font-semibold
                  shadow-lg
                  shadow-red-500/20
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:scale-[1.01]
                  transition
                  "
                >
                  <FaTrash />
                  Delete Permanently
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
