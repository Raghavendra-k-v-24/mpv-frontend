import React from "react";
import { Label } from "@/components/ui/label";
const Acknowledgments = () => {
  return (
    <div className="h-max w-full flex flex-col gap-4 px-30 text-justify">
      {/* 1 */}
      <Label className="font-bold">Definitions:</Label>
      <ul className="list-disc pl-5">
        <li>
          <Label className="text-xs">
            Lender" includes the Lender’s agents, service providers, and any of
            their successors and assigns.
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            Other Loan Participants" includes (i) any actual or potential owners
            of a loan resulting from this application (the “Loan”), (ii)
            acquirers of any beneficial or other interest in the Loan, (iii) any
            mortgage insurer, (iv) any guarantor, (v) any servicer of the Loan,
            and (vi) any of these parties' service providers, successors or
            assigns.
          </Label>
        </li>
      </ul>
      {/* 2 */}
      <Label className="font-bold">
        I agree to, acknowledge, and represent the following:
      </Label>
      <Label className="font-bold">
        (1) The Complete Information for this Application
      </Label>
      <ul className="list-disc pl-5">
        <li>
          <Label className="text-xs">
            The information I have provided in this application is true,
            accurate, and complete as of the date I signed this application.
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            If the information I submitted changes or I have new information
            before closing of the Loan, I must change and supplement this
            application, including providing any updated/supplemented real
            estate sales contract.
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            For purchase transactions: The terms and conditions of any real
            estate sales contract signed by me in connection with this
            application are true, accurate, and complete to the best of my
            knowledge and belief. I have not entered into any other agreement,
            written or oral, in connection with this real estate transaction.
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            The Lender and Other Loan Participants may rely on the information
            contained in the application before and after closing of the Loan.
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            Any intentional or negligent misrepresentation of information may
            result in the imposition of:
          </Label>
          <ul>
            <li>
              <Label className="text-xs">
                (a) civil liability on me, including monetary damages, if a
                person suffers any loss because the person relied on any
                misrepresentation that I have made on this application, and/or
              </Label>
            </li>
            <li>
              <Label className="text-xs">
                (b) criminal penalties on me including, but not limited to, fine
                or imprisonment or both under the provisions of Federal law (18
                U.S.C. §§ 1001 et seq.).
              </Label>
            </li>
          </ul>
        </li>
      </ul>
      {/* 3 */}
      <Label className="font-bold">(2) The Property’s Security</Label>
      <Label className="text-xs">
        The Loan I have applied for in this application will be secured by a
        mortgage or deed of trust which provides the Lender a security interest
        in the property described in this application.
      </Label>
      {/* 4 */}
      <Label className="font-bold">
        (3) The Property’s Appraisal, Value, and Condition
      </Label>
      <ul className="list-disc pl-5">
        <li>
          <Label className="text-xs">
            Any appraisal or value of the property obtained by the Lender is for
            use by the Lender and Other Loan Participants.
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            The Lender and Other Loan Participants have not made any
            representation or warranty, express or implied, to me about the
            property, its condition, or its value.
          </Label>
        </li>
      </ul>
      {/* 5 */}
      <Label className="font-bold">(4) Electronic Records and Signatures</Label>
      <ul className="list-disc pl-5">
        <li>
          <Label className="text-xs">
            The Lender and Other Loan Participants may keep any paper record
            and/or electronic record of this application, whether or not the
            Loan is approved.
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            If this application is created as (or converted into) an “electronic
            application”, I consent to the use of “electronic records” and
            “electronic signatures” as the terms are defined in and governed by
            applicable Federal and/or state electronic transactions laws.
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            I intend to sign and have signed this application either using my:
          </Label>
          <ul>
            <li>
              <Label className="text-xs">(a) electronic signature; or </Label>
            </li>
            <li>
              <Label className="text-xs">
                (b) a written signature and agree that if a paper version of
                this application is converted into an electronic application,
                the application will be an electronic record, and the
                representation of my written signature on this application will
                be my binding electronic signature.
              </Label>
            </li>
          </ul>
        </li>
        <li>
          <Label className="text-xs">
            I agree that the application, if delivered or transmitted to the
            Lender or Other Loan Participants as an electronic record with my
            electronic signature, will be as effective and enforceable as a
            paper application signed by me in writing.
          </Label>
        </li>
      </ul>
      {/* 6 */}
      <Label className="font-bold">(5) Delinquency</Label>
      <ul className="list-disc pl-5">
        <li>
          <Label className="text-xs">
            The Lender and Other Loan Participants may report information about
            my account to credit bureaus. Late payments, missed payments, or
            other defaults on my account may be reflected in my credit report
            and will likely affect my credit score.
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            If I have trouble making my payments I understand that I may contact
            a HUD-approved housing counseling organization for advice about
            actions I can take to meet my mortgage obligations
          </Label>
        </li>
      </ul>
      {/* 7 */}
      <Label className="font-bold">
        (6) Authorization for Use and Sharing of Information
      </Label>
      <Label className="text-xs">
        By signing below, in addition to the representations and agreements made
        above, I expressly authorize the Lender and Other Loan Participants to
        obtain, use, and share with each other (i) the loan application and
        related loan information and documentation, (ii) a consumer credit
        report on me, and (iii) my tax return information, as necessary to
        perform the actions listed below, for so long as they have an interest
        in my loan or its servicing:{" "}
      </Label>
      <ul className="pl-5 flex flex-col gap-1">
        <li>
          <Label className="text-xs">(a) process and underwrite my loan;</Label>
        </li>
        <li>
          <Label className="text-xs">
            (b) verify any data contained in my consumer credit report, my loan
            application and other information supporting my loan application;
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            (c) inform credit and investment decisions by the Lender and Other
            Loan Participants;
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            (d) perform audit, quality control, and legal compliance analysis
            and reviews;
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            (e) perform analysis and modeling for risk assessments;
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            (f) monitor the account for this loan for potential delinquencies
            and determine any assistance that may be available to me; and
          </Label>
        </li>
        <li>
          <Label className="text-xs">
            (g) other actions permissible under applicable law.
          </Label>
        </li>
      </ul>
    </div>
  );
};

export default Acknowledgments;
