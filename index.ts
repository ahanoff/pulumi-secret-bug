import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const config = new pulumi .Config();
const testSecretValue = config.requireSecret("test");

const testSecret = new aws.secretsmanager.Secret("test", {
    name: "test"
})

new aws.secretsmanager.SecretVersion("test-secret-version", {
    secretId: testSecret.id,
    secretString: testSecretValue
})