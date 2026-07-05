import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaClock,
  FaSignal,
  FaDownload,
  FaCopy,
  FaShareAlt,
  FaBrain,
} from "react-icons/fa";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generateNotesPDF = (notes) => {
  const doc = new jsPDF();

  const margin = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - margin * 2;

  let y = 20;

  const checkPage = (requiredHeight = 10) => {
    if (y + requiredHeight > 280) {
      doc.addPage();
      y = 20;
    }
  };

  const addHeading = (text) => {
    checkPage(15);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(text, margin, y);
    y += 10;
  };

  const addParagraph = (text) => {
    if (!text) return;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(text, maxWidth);

    checkPage(lines.length * 7);

    doc.text(lines, margin, y);

    y += lines.length * 7 + 4;
  };

  const addBulletList = (items = []) => {
    items.forEach((item) => {
      addParagraph("• " + item);
    });
  };

  // ---------------- Title ----------------

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(notes.title || "Exam Notes", margin, y);
  y += 15;

  // ---------------- Overview ----------------

  addHeading("Overview");
  addParagraph(notes.overview);

  // ---------------- Learning Objectives ----------------

  if (notes.learningObjectives?.length) {
    addHeading("Learning Objectives");
    addBulletList(notes.learningObjectives);
  }

  // ---------------- Definitions ----------------

  if (notes.definitions?.length) {
    addHeading("Definitions");

    notes.definitions.forEach((item) => {
      addParagraph(`${item.term}: ${item.meaning}`);
    });
  }

  // ---------------- Key Concepts ----------------

  if (notes.keyConcepts?.length) {
    addHeading("Key Concepts");
    addBulletList(notes.keyConcepts);
  }

  // ---------------- Detailed Notes ----------------

  if (notes.detailedNotes?.length) {
    addHeading("Detailed Notes");

    notes.detailedNotes.forEach((note) => {
      addParagraph(note.heading);

      addParagraph(note.content);

      if (note.example) {
        addParagraph("Example:");
        addParagraph(note.example);
      }
    });
  }

  // ---------------- Important Points ----------------

  if (notes.importantPoints?.length) {
    addHeading("Important Points");
    addBulletList(notes.importantPoints);
  }

  // ---------------- Revision Notes ----------------

  if (notes.revisionNotes?.length) {
    addHeading("Revision Notes");
    addBulletList(notes.revisionNotes);
  }

  // ---------------- Memory Tricks ----------------

  if (notes.memoryTricks?.length) {
    addHeading("Memory Tricks");
    addBulletList(notes.memoryTricks);
  }

  // ---------------- Common Mistakes ----------------

  if (notes.commonMistakes?.length) {
    addHeading("Common Mistakes");
    addBulletList(notes.commonMistakes);
  }

  // ---------------- Real World Applications ----------------

  if (notes.realWorldApplications?.length) {
    addHeading("Real World Applications");
    addBulletList(notes.realWorldApplications);
  }

  // ---------------- MCQs ----------------

  if (notes.examQuestions?.mcqs?.length) {
    addHeading("MCQs");

    notes.examQuestions.mcqs.forEach((mcq, index) => {
      addParagraph(`${index + 1}. ${mcq.question}`);

      mcq.options?.forEach((option) => {
        addParagraph(option);
      });

      addParagraph(`Answer: ${mcq.answer}`);
    });
  }

  // ---------------- Short Questions ----------------

  if (notes.examQuestions?.shortQuestions?.length) {
    addHeading("Short Answer Questions");
    addBulletList(notes.examQuestions.shortQuestions);
  }

  // ---------------- Long Questions ----------------

  if (notes.examQuestions?.longQuestions?.length) {
    addHeading("Long Answer Questions");
    addBulletList(notes.examQuestions.longQuestions);
  }

  // ---------------- Viva ----------------

  if (notes.examQuestions?.vivaQuestions?.length) {
    addHeading("Viva Questions");
    addBulletList(notes.examQuestions.vivaQuestions);
  }

  // ---------------- Interview ----------------

  if (notes.examQuestions?.interviewQuestions?.length) {
    addHeading("Interview Questions");
    addBulletList(notes.examQuestions.interviewQuestions);
  }

  // ---------------- Last Minute Revision ----------------

  if (notes.lastMinuteRevision?.length) {
    addHeading("Last Minute Revision");
    addBulletList(notes.lastMinuteRevision);
  }

  // ---------------- Summary ----------------

  if (notes.summary) {
    addHeading("Summary");
    addParagraph(notes.summary);
  }

  doc.save(`${notes.title || "ExamNotes"}.pdf`);

  toast.success("Notes PDF generated successfully!");
};

export default function HeroSection({ notes }) {
  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(notes?.summary || "");
      toast.success("Summary copied!");
    } catch {
      toast.error("Failed to copy summary.");
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: notes?.title || "Exam Notes",
          text: notes?.overview || "",
        });
      } else {
        toast("Sharing is not supported on this device.");
      }
    } catch {
      // User cancelled or share failed
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-gradient-to-br
        from-slate-900/90
        via-slate-900/70
        to-slate-800/60
        p-6
        md:p-8
        backdrop-blur-2xl
      "
    >
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          <FaBrain />
          AI Generated Notes
        </div>

        {/* Title */}
        <h1 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
          {notes?.title || "Untitled Notes"}
        </h1>

        {/* Overview */}
        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
          {notes?.overview ||
            "These notes were generated automatically and optimized for quick revision and exam preparation."}
        </p>

        {/* Metadata */}
        <div className="mt-8 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <FaBookOpen className="text-purple-400" />
            <span>{notes?.keywords?.length || 0} Topics</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <FaClock className="text-cyan-400" />
            <span>~15 Min Revision</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <FaSignal className="text-green-400" />
            <span>{notes?.difficulty || "Medium"}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            className="
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-cyan-500
              px-6
              py-3
              font-semibold
              transition
              hover:scale-[1.02]
            "
            onClick={() => generateNotesPDF(notes)}
          >
            <span className="flex items-center gap-2">
              <FaDownload />
              Download PDF
            </span>
          </button>

          <button
            onClick={handleCopySummary}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              font-semibold
              transition
              hover:bg-white/10
            "
          >
            <span className="flex items-center gap-2">
              <FaCopy />
              Copy Summary
            </span>
          </button>

          <button
            onClick={handleShare}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              font-semibold
              transition
              hover:bg-white/10
            "
          >
            <span className="flex items-center gap-2">
              <FaShareAlt />
              Share
            </span>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
