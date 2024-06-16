import {
  Blockfrost,
  Lucid,
} from "https://deno.land/x/lucid@0.8.3/mod.ts";

const args = Deno.args;
if (args.length < 1) {
  console.error("Metadatennachricht erforderlich");
  Deno.exit(1);
}
const metadata = args[0];

const lucid = await Lucid.new(
  new Blockfrost(
      "https://cardano-preview.blockfrost.io/api/v0",
      "",//in diese Lücke muss die Blockfrost-ID für das Cardano Preview-Netzwerk
  ),
  "Preview",
);

lucid.selectWalletFromPrivateKey(await Deno.readTextFile("./wallet2.sk"));

const tx = await lucid.newTx()
.payToAddress("addr_test1vr6g2skxcumzm2exjn7nanfdzn8lr7dexzzl85az9l57xps2wdr9x", { lovelace: 10000000n })
.attachMetadata(674, metadata)
.complete();

const signedTx = await tx.sign().complete();

const txHash = await signedTx.submit();
console.log(txHash);

