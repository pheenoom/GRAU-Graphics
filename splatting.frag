#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D noise0;
uniform sampler2D rock1;
uniform sampler2D grass2;

void main()
{
    vec4 colorNoise = texture(noise0, vtexCoord);
    vec4 colorRock = texture(rock1, vtexCoord);
    vec4 colorGrass = texture(grass2, vtexCoord);
     
    fragColor = mix(colorRock, colorGrass, colorNoise.x);
}
