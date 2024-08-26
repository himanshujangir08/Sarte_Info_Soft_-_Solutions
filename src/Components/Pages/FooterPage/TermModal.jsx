/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    await animate(scope.current, { opacity: [1, 0] });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", { y: [yStart, height] });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "easeInOut" }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export const TermModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid place-content-center">
      <button
        onClick={() => setOpen(true)}
        className="font-semibold text-white/[0.5] hover:text-white cursor-pointer"
      >
        Terms & Conditions
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Terms & Conditions
          </h2>
          <p>
            Sure, I'll rephrase and simplify the provided terms and conditions
            for your company, Sarte Infosoft & Solution. Here's the new draft:-
          </p>
          <div>
            <h1 className="text-2xl text-neutral-200">*Agreement Overview*</h1>
            <p>
              By using the platform and services provided by Sarte Infosoft &
              Solution ("Owner"), you agree to these Terms and Conditions
              ("Terms"), along with our Privacy Policy and Disclaimer.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*Acceptance of Terms*</h1>
            <p>
              By accessing or purchasing from our platform, you agree to these
              Terms. These apply to all users, including browsers,
              third-parties, and content contributors. You also acknowledge that
              we use your personal information as described in our Privacy
              Policy.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*Definitions*</h1>
            <p>
              - *Owner, Us, We:* Refers to Sarte Infosoft & Solution and its
              employees and affiliates.
            </p>
            <p>
              - *You, the User:* Refers to anyone using our platform or
              services.
            </p>
            <p>
              - *Parties:* Refers to both the Owner and the User collectively.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">
              *Consent and Agreement*
            </h1>
            <p>
              By using the platform, you confirm that you have read and agreed
              to these Terms. If you disagree, please stop using the platform
              immediately. Additional terms may apply based on specific services
              you use.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*About This Site*</h1>
            <p>
              Our platform facilitates fundraising. We reserve the right to
              refuse service to anyone at any time for any reason. Use the
              platform lawfully and respect the rights of others.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*Acceptable Use*</h1>
            <p>
              You agree not to use the platform for illegal purposes or to harm
              the platform, services, or our business.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*Amendments*</h1>
            <p>
              We may update these Terms at any time without notice. The updated
              Terms will be effective immediately. Check these Terms regularly
              to stay informed of any changes.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*Communication*</h1>
            <p>
              By using the platform, you agree to receive communications from us
              about our services via phone or email. These communications are
              not spam under any law.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*Indemnification*</h1>
            <p>
              You agree to indemnify and hold us harmless against any legal
              claims arising from your use of the platform, your breach of these
              Terms, or your conduct.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">
              *License to Use Platform*
            </h1>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to use our platform. Unauthorized use will result in
              termination of access. We do not guarantee the platform's constant
              availability or accuracy of information.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*User Obligations*</h1>
            <p>
              You may need to register and provide accurate personal
              information. Keep your information secure and notify us if it is
              compromised.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*Payment*</h1>
            <p>
              If you register for paid services, you agree to pay the specified
              fees. Payments are processed through Cashfree. If a startup
              reaches its funding goal, you will receive a share certificate or
              a refund. If not, your money will be refunded.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*Privacy*</h1>
            <p>
              We prioritize your privacy and handle your information according
              to the Information Technology Act, 2000. We may share your
              information with affiliates or disclose it as required by law.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">
              *Security and Reverse Engineering*
            </h1>
            <p>
              You agree not to reverse engineer or breach the security of the
              platform.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*Spam Policy*</h1>
            <p>
              Using our platform for illegal spam activities is strictly
              prohibited.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">
              *Service Interruption*
            </h1>
            <p>
              We may interrupt your access for maintenance or emergencies. We
              are not liable for any loss due to downtime.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*Third-Party Links*</h1>
            <p>
              We may post links to third-party websites. We are not responsible
              for any loss or damage from using these third-party services.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">*General Provisions*</h1>
            <p>
              - *Governing Law and Jurisdiction:* These Terms are governed by
              the laws of India and any disputes will be resolved in the courts
              of Indore.
            </p>
            <p>
              - *Non-Waiver:* Failure to enforce any right under these Terms
              does not waive that right.
            </p>
            <p>
              - *Severability:* If any part of these Terms is unenforceable, the
              rest will remain in effect.
            </p>
            <p>
              - *Entire Agreement:* These Terms constitute the entire agreement
              between the parties regarding the platform.
            </p>
            <p>
              - *Termination:* You or the Owner can terminate these Terms at any
              time. Termination may result in deletion of your account and
              content.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-neutral-200">
              *Electronic Communication*
            </h1>
            <p>
              You agree to receive communications electronically. For any
              queries, email us at [provide your email address].
            </p>
          </div>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

export default TermModal;
