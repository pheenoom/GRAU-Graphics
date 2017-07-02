#version 330 core

out vec4 fragColor;
in vec3 vs_normal;
in vec3 vs_vertex;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelViewProjectionMatrix;

uniform mat4 modelMatrixInverse;
uniform mat4 viewMatrixInverse;
uniform mat4 projectionMatrixInverse;
uniform mat4 modelViewMatrixInverse;
uniform mat4 modelViewProjectionMatrixInverse;

uniform mat3 normalMatrix;

uniform vec4 lightAmbient = vec4(0.1,0.1,0.1,1.0);  // similar a gl_LightSource[0].ambient
uniform vec4 lightDiffuse = vec4(1.0,1.0,1.0,1.0);  // similar a gl_LightSource[0].diffuse
uniform vec4 lightSpecular = vec4(1.0,1.0,1.0,1.0); // similar a gl_LightSource[0].specular
uniform vec4 lightPosition = vec4(0.0,0.0,0.0,1.0); // similar a gl_LightSource[0].position; en eye space
uniform vec4 matAmbient = vec4(1.0,0.5,0.3,1.0);    // similar a gl_FrontMaterial.ambient 
uniform vec4 matDiffuse = vec4(1.0,0.5,0.3,1.0);    // similar a gl_FrontMaterial.diffuse 
uniform vec4 matSpecular = vec4(1.0,1.0,1.0,1.0);   // similar a gl_FrontMaterial.specular
uniform float matShininess = 8.0f; // similar a gl_FrontMaterial.shininess

uniform vec3 boundingBoxMin; // cantonada minima de la capsa englobant 
uniform vec3 boundingBoxMax; // cantonada maxima de la capsa englobant

uniform vec2 mousePosition;  // coordenades del cursor (window space; origen a la cantonada inferior esquerra)




uniform bool world = true;

vec4 light(vec3 N, vec3 V, vec3 L)
{
    N=normalize(N); V=normalize(V); L=normalize(L);
    vec3 R = normalize( 2.0*dot(N,L)*N-L );
    float NdotL = max( 0.0, dot( N,L ) );
    float RdotV = max( 0.0, dot( R,V ) );
    float Idiff = NdotL;
    float Ispec = 0;
    if (NdotL>0) Ispec=pow( RdotV, matShininess );
    return
        matAmbient * lightAmbient +
        matDiffuse * lightDiffuse * Idiff+
        matSpecular * lightSpecular * Ispec;
}

void main()
{
    vec3 N;
    vec3 V;
    vec3 L;    
        N = vs_normal;
        vec4 vertexWorldSpace = vec4(vs_vertex, 1.0);
        vec3 obsWorldSpace = (viewMatrixInverse * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        V = obsWorldSpace - vertexWorldSpace.xyz;

        vec4 lightPositionWorldSpace = vec4(5.0,5.0,0.0,1.0);
        L = (lightPositionWorldSpace - vertexWorldSpace).xyz;
    
    fragColor = light(N, V, L);
}
